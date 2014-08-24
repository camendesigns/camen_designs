var view = view || {};

function ResumeMediator()
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
	 * @param vc
	 * @param params
	 */
	this.register = function(vc, params)
	{
		view.ResumeMediator.viewContent = vc;

		$('#wrapper').css('background-image', "url('../images/foundation/background1.jpg')");

		// load the content
		view.ResumeMediator.viewContent.hide(400, view.ResumeMediator.view_hideHandler);
		
		// reset the background
		$('#gallery-overlay').css({'background-color': ''});
	};

	//-------------------------------------------------------------------------
	//
	// Event Handlers
	//
	//-------------------------------------------------------------------------

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
	this.view_hideHandler = function()
	{
		view.ResumeMediator.viewContent.load('pages/resume.html', null, 
			view.ResumeMediator.view_loadHandler);
	};

	/**
	 *
	 */
	this.view_loadHandler = function()
	{
		var me = view.ResumeMediator;

		$('.crumb-nav a').click(me.crumb_clickHandler);

		me.viewContent.show(400);
	};
}

view.ResumeMediator = view.ResumeMediator || new ResumeMediator();