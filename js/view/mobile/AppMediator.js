var view = view || {};

function AppMediator()
{
	//-----------------------------------------------------------------------------
	//
	// Methods
	//
	//-----------------------------------------------------------------------------

	/**
	 * @param {string} page
	 * @param {object} options
	 */
	this.changePage = function (page, options)
	{
		$.mobile.changePage($(page), options);
	};
};

view.AppMediator = view.AppMediator || new AppMediator();