var view = view || {};

function HomeMediator()
{
	//-------------------------------------------------------------------------
	//
	// Properties
	//
	//-------------------------------------------------------------------------

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
	 * @param list
	 */
	this.getThumbs = function(list)
	{
		return $(list).find('img');
	};

	/**
	 * @param vc
	 * @param params
	 */
	this.register = function(vc, params)
	{
		view.HomeMediator.viewContent = vc;


		// load the content
		view.HomeMediator.viewContent.hide(400, view.HomeMediator.view_hideHandler);
		
		// reset the background
		$('#gallery-overlay').css({'background-color': ''});
	};

	//-------------------------------------------------------------------------
	//
	// Event Handlers
	//
	//-------------------------------------------------------------------------

	/**
	 *
	 */
	this.list_mouseEnterHandler = function()
	{
		var images = view.HomeMediator.getThumbs(this);
		var img;
		var height = 105;
		var count = 1;
		var padding;
		var paddingTop = 0;
		var paddingBottom = 0;
		var totalHeight = 35;

			// $(this).css('border', '2px solid black'); 
		
		for( var i = 0; i < images.length; i++ )
		{				
			
			if( i > 1)
			{
				if( paddingTop == 0 )
				{
					paddingTop = 80;
				}
				else
				{
					paddingTop += height;
				}
				
				padding = paddingTop;
			}
			else
			{
				if( paddingBottom == 0 )
				{
					paddingBottom = -105;
				}
				else
				{
					paddingBottom -= height;
				}
				padding = paddingBottom;
			}

			totalHeight += height;
			
			$(images[i]).stop(true)
			.show()
			.animate({
				'width': '120px',
				'height': '80px',
				'left':'0px',
				'opacity':1,
				'top': padding + 'px'
			},400,'easeOutBack')
			.andSelf();
			count++;
		}

		// resize the LI for the mouseleave accuracy
		$(this).css('height', totalHeight + 'px');
		
		$(this).css('top', paddingBottom  + 'px');
		$(this).find('.menu-thumbs').css('top', (paddingBottom * -1 ) + 'px');
		$(this).find('.menu-wrap').css('top', (paddingBottom * -1 + 25) + 'px');
	};

	/**
	 *
	 */
	this.list_mouseLeaveHandler = function()
	{
		$(this).stop();
		// reset LI size
		$(this).css('height', '35px');
		$(this).css('top', '0px');
		$(this).find('.menu-thumbs').css('top', '0px');
		$(this).find('.menu-wrap').css('top', '25px');

		// reset images
		$(this).find('img')
			.stop(true)
			.animate({
				'width':'120px',
				'height':'80px',
				'opacity':0,
				'top':'0px'},400)
			.andSelf();
	};

	/**
	 * @param event
	 */
	this.thumbs_clickHandler = function(event)
	{
		window.location.hash = this.hash;

		return false;
	};

	/**
	 *
	 */
	this.view_hideHandler = function()
	{
		view.HomeMediator.viewContent.load('pages/home.html', null, 
			view.HomeMediator.view_loadHandler);
	};

	/**
	 *
	 */
	this.view_loadHandler = function()
	{
		// set handlers
		$('.slide-menu > li').bind('mouseenter', 
			view.HomeMediator.list_mouseEnterHandler);
		$('.slide-menu > li').bind('mouseleave', 
			view.HomeMediator.list_mouseLeaveHandler);

		// redirect links
		$('#main-menu a').click(view.HomeMediator.thumbs_clickHandler);

		view.HomeMediator.viewContent.show(400);
	};
}

view.HomeMediator = view.HomeMediator || new HomeMediator();