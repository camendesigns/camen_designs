var view = view || {};

function GalleryMediator()
{
	//-------------------------------------------------------------------------
	//
	// Properties
	//
	//-------------------------------------------------------------------------

	//---------------------------------
	// currentPage
	//---------------------------------

	this.currentPage = '';

	//---------------------------------
	// mediumImages
	//---------------------------------

	this.mediumImages = [];

	//---------------------------------
	// selectedThumb
	//---------------------------------

	this.selectedThumb = 0;

	//---------------------------------
	// view
	//---------------------------------

	this.viewContent = null;

	//-------------------------------------------------------------------------
	//
	// Methods
	//
	//-------------------------------------------------------------------------

	/**
	 * Adjusts the thumb list height math depending on OS and browser
	 */
	this.getListHeightOffset = function() {
		
		if($.browser.mozilla)
		{
			return 2.5;
		}
		else
		{
			return 10;
		}
	}

	/**
	 * @param vc View Content
	 * @param params Additional params from the hash
	 */
	this.register = function(vc, params)
	{
		var me = view.GalleryMediator;

		me.viewContent = vc;

		me.selectedThumb = 0;

		if( params && params.length > 1 )
		{
			me.selectedThumb = parseInt(params[1]);
		}

		// get image list
		me.currentPage = params[0];
		me.mediumImages = model.ImageProxy.getImagesByPage(me.currentPage);

		// load the content
		if( model.AppProxy.activePage != me.currentPage )
		{
			$('#wrapper').css('background-image', "url('../images/foundation/background_accent_02')");
			me.viewContent.hide(400, me.view_hideHandler);
		}
		else
		{
			me.switchImage();
		}
	}

	/**
	 * Switches image based on selectedThumb
	 */
	this.switchImage = function()
	{
		var me = view.GalleryMediator;
		var url = '';
		var index = me.selectedThumb;
		var color = '#FFFFFF';

		url = me.mediumImages[index-1].gallery;
		color = me.mediumImages[index-1].color;
		
		// change background color
		$("#gallery-overlay").animate({'background-color': color}, 600);
		
		// change out high-res URL
		$('.gallery-preview .high-res a').attr('href', me.mediumImages[index-1].highRes);
		
		// enable/disable next/prev buttons
		if( index <= 1 )
		{
			$(me.viewContent).find('.gallery-preview .prev')
				.fadeOut(0);
			$(me.viewContent).find('.gallery-preview .next')
				.fadeIn(0);
		}
		else if( index >= me.mediumImages.length )
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

		var largeImg = $(me.viewContent)
			.find('.gallery-preview .large-img img');

		var count = 0;
		var thumbList = $('.thumb-list').find('.thumb');

		// make thumb active
		do
		{
			if( count == index - 1 )
			{
				$(thumbList[count]).addClass('active');
				$(thumbList[count]).prepend('<img class="mask" src="images/foundation/mask_thumbnail.png" />');
			}
			else
			{
				$(thumbList[count]).removeClass('active');
				$(thumbList[count]).find('.mask').detach();
			}

			count++;
		}
		while( count < me.mediumImages.length );

		var moreInfo = $('.more-info-' + me.selectedThumb);
		// if More Info is up, it needs to be updated as well.
		if( $('.more-info .active') )
		{
			$('.more-info .active').fadeOut(function(){
				$('.more-info .active').removeClass('active');
				me.moreButton_clickHandler();
			});
		}

		$(largeImg).fadeOut(400, function(){
			$(largeImg).attr('src',url).bind('onreadystatechange load', function(){
                  if (this.complete) $(largeImg).fadeIn(400);
            });
		});
	}

	//-------------------------------------------------------------------------
	//
	// Event Handlers
	//
	//-------------------------------------------------------------------------

	/**
	 *
	 */
	this.closeButton_clickHandler = function() 
	{
		var me = view.GalleryMediator;
		var moreInfo = $('.more-info-' + me.selectedThumb);

		$(moreInfo).find('.close-button').unbind('click');
		$(moreInfo).removeClass('active');
		$(moreInfo).slideUp(600, function() {
			$('.more-info .button img').attr('src', 'images/foundation/thumbs-next.png');
			$('.more-info .more-button').show();
		});

	};

	/**
	 * @param event
	 */
	this.crumb_clickHandler = function(event)
	{
		window.location.hash = this.hash;

		return false;
	};

	/**
	 *
	 */
	this.moreButton_clickHandler = function()
	{
		// determine if we are hiding or showing
		var me = view.GalleryMediator;
		var moreInfo = $('.more-info-' + me.selectedThumb);
		$(moreInfo).addClass('active');
		$(moreInfo).find('.close-button').click(me.closeButton_clickHandler);
		$(moreInfo).slideDown(600);
		$('.more-info .more-button').hide();
		
	};

	/**
	 *
	 */
	this.preview_nextHandler = function()
	{
		var me = view.GalleryMediator;
		var newIndex = me.selectedThumb + 1;
		
		if( newIndex >= me.mediumImages.length )
		{
			newIndex = me.mediumImages.length;
		}

		window.location.hash = me.currentPage + '/' + newIndex;
	};

	/**
	 *
	 */
	this.preview_prevHandler = function()
	{
		var me = view.GalleryMediator;
		var newIndex = me.selectedThumb - 1;
		
		if( newIndex <= 0 )
		{
			newIndex = 1;
		}

		window.location.hash = me.currentPage + '/' + newIndex;
	};

	/**
	 * @param index
	 */
	this.thumb_clickHandler = function(event)
	{
		var me = view.GalleryMediator;
		me.switchImage(me.mediumImages[event.data]);
	};

	/**
	 *
	 */
	this.thumbs_nextHandler = function()
	{
		var me = view.GalleryMediator;
		var listHeight = parseFloat($('.gallery-list .thumb-list').css('height')
			.replace('px', ''));

		console.log("listHeight: " + listHeight);
		
		listHeight += me.getListHeightOffset();

		// listHeight += 2.5;

		console.log("listHeight: " + listHeight);
		
		var currentTop = parseFloat($('.gallery-list .thumb-list').css('top')
			.replace('px', ''));

		console.log("currentTop: " + currentTop);

		// determine what the stopping point should be
		var thumbList = $('.gallery-list .thumb-list img');
		thumbCount = thumbList.length;

		console.log("thumbCount: " + thumbCount);

		thumbHeight = $(thumbList[0]).innerHeight();

		console.log("thumbHeight: " + thumbHeight);

		while( thumbCount % 6 !== 0 )
		{
			// if not divisible by six, then increase until it is
			thumbCount++;
		}

		console.log("thumbCount: " + thumbCount);

		var padding = thumbCount * (thumbHeight + 5 + 2.5);

		console.log("padding: " + padding);

		console.log((currentTop - listHeight) + " < " + (padding * -1));
		if( (currentTop - listHeight) < (padding * -1) )
		{
			console.log("NO NEXT");
			
			return;
		}

		console.log("top: " + (currentTop - listHeight));

		$('.gallery-list .thumb-list').animate({
				'top': (currentTop - listHeight) + 'px'
			}, 'slow');
	};

	/**
	 *
	 */
	this.thumbs_prevHandler = function()
	{
		var me = view.GalleryMediator;
		var listHeight = parseFloat($('.gallery-list .thumb-list').css('height')
			.replace('px', ''));

		// listHeight += 2.5;
		listHeight += me.getListHeightOffset();
		
		var currentTop = parseFloat($('.gallery-list .thumb-list').css('top')
			.replace('px', ''));

		if( (currentTop) >= 0 )
			return;

		$('.gallery-list .thumb-list').animate({
				'top': (currentTop + listHeight) + 'px'
			}, 'slow');
	};

	/**
	 *
	 */
	this.view_hideHandler = function()
	{
		var me = view.GalleryMediator;
		var url = '';

		switch(me.currentPage)
		{
			case enums.pages.identityGallery:
				url = 'pages/identity-gallery.html';
				break;
			case enums.pages.printGallery:
				url = 'pages/print-gallery.html';
				break;
			case enums.pages.publicationGallery:
				url = 'pages/publications-gallery.html';
				break;
			case enums.pages.processGallery:
				url = 'pages/process-gallery.html';
				break;
			case enums.pages.webGallery:
				url = 'pages/web-gallery.html';
				break;
			case enums.pages.packagingGallery:
				url = 'pages/packaging-gallery.html';
				break;
		}
		me.viewContent.load(url, null, me.view_loadHandler);
	}

	/**
	 *
	 */
	this.view_loadHandler = function()
	{
		var me = view.GalleryMediator;
		var localView = me.viewContent;
		var selectedThumbIndex = me.selectedThumb-1;

		// set handlers
		$(localView).find('.gallery-preview .prev')
			.click(me.preview_prevHandler);
		$(localView).find('.gallery-preview .next')
			.click(me.preview_nextHandler);
		$(localView).find('.gallery-list .prev')
			.click(me.thumbs_prevHandler);
		$(localView).find('.gallery-list .next')
			.click(me.thumbs_nextHandler);

		$('.crumb-nav a').click(me.crumb_clickHandler);
		$('.more-info .more-button').click(me.moreButton_clickHandler);

		me.viewContent.show(400);
		me.switchImage();
	};
}

view.GalleryMediator = view.GalleryMediator || new GalleryMediator();