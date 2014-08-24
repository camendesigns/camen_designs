function BrowserDetect()
{
	//-------------------------------------------------------------------------
	//
	// Properties
	//
	//-------------------------------------------------------------------------

	this.mobileAgents = [
		'mobile', 'BlackBerry', 'wOSBrowser', 'webOS', 'Opera Mobi', 'Silk'
	];

	//-------------------------------------------------------------------------
	//
	// Methods
	//
	//-------------------------------------------------------------------------

	this.isIpad = function() 
	{
		return (navigator.userAgent.search(new RegExp('iPad', 'i')) > -1);
	};

	this.isIphone = function() {
		var retval = false;
		var agent = '';
		var re = null;

		var iPhoneAgents = ['iPhone', 'iPod'];

		for( var i = 0; i < iPhoneAgents.length; i++)
		{
			agent = iPhoneAgents[i];
			re = new RegExp(agent, 'i');

			if( navigator.userAgent.search(re) > -1 )
			{
				retval = true;
			}
		}

		return retval;
	};

	this.isAndroidMobile = function() 
	{
		if( navigator.userAgent.search(new RegExp('Android', 'i')) > -1 )
		{
			if( navigator.userAgent.search(new RegExp('mobile', 'i')) > -1 )
			{
				return true;
			}
		}

		return false;
	};

	this.isAndroidTablet = function() 
	{
		return (navigator.userAgent.search(new RegExp('Android', 'i')) > -1) && !this.isAndroidMobile();
	};

	this.isOtherMobile = function() 
	{
		// some of the mobile flags also exist for tablet, but we do additional checks
		if( this.isTablet() )
			return false;

		var retval = false;
		var agent = '';
		var re = null;

		for( var i = 0; i < this.mobileAgents.length; i++)
		{
			agent = this.mobileAgents[i];
			re = new RegExp(agent, 'i');

			if( navigator.userAgent.search(re) > -1 )
			{
				retval = true;
			}
		}

		return retval;
	};

	/**
	 * Determine if a user agent is from a mobile device
	 * @return boolean
	 */
	this.isMobile = function()
	{
		return this.isIphone() || this.isAndroidMobile() || this.isOtherMobile();
	};

	this.isTablet = function()
	{
		return this.isIpad() || this.isAndroidTablet();
	};

	/**
	 * Redirects them to the mobile version
	 */
	this.redirectToMobile = function()
    {
        window.location = 'http://mobile.camendesigns.com/' + window.location.hash;
    };

    /**
	 * Redirects them to the tablet version
	 */
	this.redirectToTablet = function()
    {
        window.location = '/tablet.html' + window.location.hash;
    };
}