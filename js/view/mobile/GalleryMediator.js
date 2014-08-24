var view = view || {};

function GalleryMediator()
{
	//-------------------------------------------------------------------------
	//
	// Properties
	//
	//-------------------------------------------------------------------------

	this.currentPage = '';

	this.galleryImages = [];

	this.index = 1;

	this.viewContent;

	//-------------------------------------------------------------------------
	//
	// Methods
	//
	//-------------------------------------------------------------------------

	this.getParams = function() {
		var me = view.GalleryMediator;
		var params = {};
		var pairs = [];
		var uri = '';
		var keyVals = [];
		var parts = window.location.hash.split('?');
		me.currentPage = parts.shift();

		if( parts && parts.length )
		{
			uri = parts[0];

			pairs = uri.split('&');

			for( var i = 0; i < pairs.length; i++ )
			{
				keyVals = pairs[i].split("=");

				params[keyVals[0]] = keyVals[1];
			}
		}

		return params;
	};

	this.loadInitialImage = function() {
		var me = view.GalleryMediator;
		var params = me.getParams();

		if( params['image'] )
			me.index = parseInt(params['image']);

		me.swapImage();
	};

	this.register = function() {
		$("#print-page").live('pagebeforeshow', this.print_pageBeforeShowHandler);
		$("#publications-page").live('pagebeforeshow', this.publications_pageBeforeShowHandler);
		$("#packaging-page").live('pagebeforeshow', this.packaging_pageBeforeShowHandler);
		$("#identity-page").live('pagebeforeshow', this.identity_pageBeforeShowHandler);
		$("#web-page").live('pagebeforeshow', this.web_pageBeforeShowHandler);
		$("#process-page").live('pagebeforeshow', this.process_pageBeforeShowHandler);

		$('.gallery-preview .next').live('click', this.next_clickHandler);
		$('.gallery-preview .next').live('tap', this.next_clickHandler);
		$('.gallery-preview .prev').live('click', this.prev_clickHandler);
		$('.gallery-preview .prev').live('tap', this.prev_clickHandler);
		$('.more-info .more-button').live('click', this.moreButton_clickHandler);
		$('.more-info .more-button').live('tap', this.moreButton_clickHandler);
	};

	this.swapImage = function() {
		var me = view.GalleryMediator;
		var url = '';

		url = me.galleryImages[me.index-1].gallery;
		
		// change out high-res URL
		// $(me.viewContent).find('.gallery-preview .high-res a').attr('href', me.galleryImages[me.index-1].highRes);

		$(me.currentPage + '-high-res-button').attr('href', me.galleryImages[me.index-1].highRes);
		
		// enable/disable next/prev buttons
		if( me.index <= 1 )
		{
			$(me.viewContent).find('.gallery-preview .prev')
				.fadeOut(0);
			$(me.viewContent).find('.gallery-preview .next')
				.fadeIn(0);
		}
		else if( me.index >= me.galleryImages.length )
		{
			$(me.viewContent).find('.gallery-preview .next')
				.fadeOut(0);
			$(me.viewContent).find('.gallery-preview .prev')
				.fadeIn(0);
		}
		else
		{
			$(me.viewContent).find('.gallery-preview .prev')
				.fadeIn(0);
			$(me.viewContent).find('.gallery-preview .next')
				.fadeIn(0);
		}

		var largeImg = $(me.viewContent).find('.gallery-preview .large-img img');

		var count = 0;
		var thumbList = $(me.viewContent).find('.thumb-list').find('.thumb');

		var moreInfo = $(me.viewContent).find('.more-info-' + me.index);
		
		// if More Info is up, it needs to be updated as well.
		if( $(me.viewContent).find('.more-info .active') )
		{
			$(me.viewContent).find('.more-info .active').fadeOut(function(){
				$(me.viewContent).find('.more-info .active').removeClass('active');
				me.moreButton_clickHandler();
			});
		}

		$(largeImg).fadeOut(400, function(){
			$(largeImg).attr('src',url).bind('onreadystatechange load', function(){
                  if (this.complete) $(largeImg).fadeIn(400);
            });
		});
	};

	//-------------------------------------------------------------------------
	//
	// Event Handlers
	//
	//-------------------------------------------------------------------------

	this.branding_pageBeforeShowHandler = function(event) {
		var me = view.GalleryMediator;
		me.viewContent = event.target;

		me.galleryImages = model.ImageProxy.printImages;

		me.loadInitialImage();
	};

	this.closeButton_clickHandler = function() 
	{
		var me = view.GalleryMediator;
		var moreInfo = $('.more-info-' + me.index);

		$(moreInfo).find('.close-button').unbind('click');
		$(moreInfo).find('.close-button').unbind('tap');
		$(moreInfo).removeClass('active');
		$(moreInfo).slideUp(600, function() {
			$('.more-info .button img').attr('src', 'images/thumbs-next.png');
			$('.more-info .more-button').show();
		});

	};

	this.design_pageBeforeShowHandler = function(event) {
		var me = view.GalleryMediator;
		me.viewContent = event.target;

		me.galleryImages = model.ImageProxy.publicationsImages;

		me.loadInitialImage();
	};

	this.illustration_pageBeforeShowHandler = function(event) {
		var me = view.GalleryMediator;
		me.viewContent = event.target;

		me.galleryImages = model.ImageProxy.packagingImages;

		me.loadInitialImage();
	};

	this.moreButton_clickHandler = function() {
		// determine if we are hiding or showing
		var me = view.GalleryMediator;
		var moreInfo = $('.more-info-' + me.index);
		$(moreInfo).addClass('active');
		$(moreInfo).find('.close-button').click(me.closeButton_clickHandler);
		$(moreInfo).find('.close-button').tap(me.closeButton_clickHandler);
		$(moreInfo).slideDown(600);
		$('.more-info .more-button').hide();
	};

	this.next_clickHandler = function()
	{
		var me = view.GalleryMediator;
		var newIndex = me.index + 1;
		
		if( newIndex >= me.galleryImages.length )
		{
			newIndex = me.galleryImages.length;
		}

		// view.AppMediator.changePage(me.currentPage + '?image=' + newIndex);
		window.location.hash = me.currentPage + '?image=' + newIndex;

		me.index = newIndex;
		me.swapImage();
	};

	this.photo_pageBeforeShowHandler = function(event) {
		var me = view.GalleryMediator;
		me.viewContent = event.target;

		me.galleryImages = model.ImageProxy.identityImages;

		me.loadInitialImage();
	};

	this.prev_clickHandler = function(event) {
		var me = view.GalleryMediator;
		var newIndex = me.index - 1;
		
		if( newIndex <= 0 )
		{
			newIndex = 1;
		}

		// view.AppMediator.changePage(me.currentPage + '?image=' + newIndex);
		window.location.hash = me.currentPage + '?image=' + newIndex;
		me.index = newIndex;
		me.swapImage();
	};

	this.product_pageBeforeShowHandler = function(event) {
		var me = view.GalleryMediator;
		me.viewContent = event.target;

		me.galleryImages = model.ImageProxy.webImages;

		me.loadInitialImage();
	};

	this.web_pageBeforeShowHandler = function(event) {
		var me = view.GalleryMediator;
		me.viewContent = event.target;

		me.galleryImages = model.ImageProxy.processImages;

		me.loadInitialImage();
	};
}

view.GalleryMediator = view.GalleryMediator || new GalleryMediator();
view.GalleryMediator.register();