#!/usr/bin/php
<?php
require_once 'aws.config.php';
require_once 'AWSSDKforPHP/sdk.class.php';

CFCredentials::set(array(
	'production' => array(
		'key' => AWS_KEY,
		'secret' => AWS_SECRET,
		'default_cache_config' => 'apc',
		'certificate_authority' => false
	)
));

$s3 = new AmazonS3();
$cdn = new AmazonCloudFront();
 
$distributions = array('E2SM0PN4445DJ4', 'E1U24FQURS9XLX');

foreach( $distributions as $dist_id ) {
	// Get the information about the distribution.
	$distribution_info = $cdn->get_distribution_info($dist_id);
	 
	// Fetch the fully-qualified domain name for the origin bucket.
	$origin_bucket_fqdn = (string) $distribution_info->body->DistributionConfig->S3Origin->DNSName;
	 
	// Strip the hostname, and only leave the bucket name.
	$origin_bucket = substr($origin_bucket_fqdn, 0, -17); // Remove `.s3.amazonaws.com`
	 
	// Get the list of files from the S3 bucket.
	$file_paths = $s3->get_object_list($origin_bucket);

	// skip images for now
	// var_dump($file_paths);

	$i = 0;
	while( $i < count($file_paths) )
	{
		if( stripos($file_paths[$i], 'images') !== false )
		{
			array_splice($file_paths, $i, 1);
		}
		else
		{
			$i++;
		}
	}

	// foreach( $file_paths as $key => $value ) {
	// 	if( stripos($value, 'images') )
	// 		array_splice($file_paths, [$key]);
	// }

	var_dump($file_paths);
	 
	// Create a new invalidation.
	$response = $cdn->create_invalidation($dist_id, 'camen-designs-portfolio-' . time(), $file_paths);
	 
	// Success?
	var_dump($response);
}

?>