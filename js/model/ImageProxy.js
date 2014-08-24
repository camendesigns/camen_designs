var model = model || {};

function ImageProxy() 
{
	//-------------------------------------------------------------------------
	//
	// Properties
	//
	//-------------------------------------------------------------------------

    this.printImages = [
        { gallery: 'images/print/global_warming/gallery/global_warming_gallery.jpg', highRes: 'images/print/global_warming/highres/global_warming_highres.jpg' },
        { gallery: 'images/print/farm_bus/gallery/farm_bus_gallery.png', highRes: 'images/print/farm_bus/highres/farm_bus_highres.jpg' },
        { gallery: 'images/print/devinci/gallery/devinci_gallery.png',  highRes: 'images/print/devinci/highres/devinci_highres.jpg' },
        { gallery: 'images/print/club/gallery/club_gallery.png',  highRes: 'images/print/club/highres/club_highres.jpg' },
        { gallery: 'images/print/vmrt/gallery/vmrt_gallery.png', highRes: 'images/print/vmrt/highres/vmrt_highres.jpg' },
        { gallery: 'images/print/zynleaf/gallery/zynleaf01_gallery.png',  highRes: 'images/print/zynleaf/highres/zynleaf01_highres.jpg' },

    ];

    this.publicationImages = [
        { gallery: 'images/publications/chicagonow/gallery/chicago01_gallery.png',  highRes: 'images/publications/chicagonow/highres/chicago01_highres.jpg' },
        { gallery: 'images/publications/chicagonow/gallery/chicago02_gallery.png',  highRes: 'images/publications/chicagonow/highres/chicago02_highres.jpg' },
        { gallery: 'images/publications/chicagonow/gallery/chicago03_gallery.png',  highRes: 'images/publications/chicagonow/highres/chicago03_highres.jpg' },
        { gallery: 'images/publications/chicagonow/gallery/chicago04_gallery.png',  highRes: 'images/publications/chicagonow/highres/chicago04_highres.jpg' },
        { gallery: 'images/publications/chicagonow/gallery/chicago05_gallery.png',  highRes: 'images/publications/chicagonow/highres/chicago05_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie01_gallery.png', highRes: 'images/publications/froggie/highres/froggie01_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie02_gallery.png',  highRes: 'images/publications/froggie/highres/froggie02_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie03_gallery.png',  highRes: 'images/publications/froggie/highres/froggie03_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie04_gallery.png',  highRes: 'images/publications/froggie/highres/froggie04_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie05_gallery.png',  highRes: 'images/publications/froggie/highres/froggie05_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie06_gallery.png',  highRes: 'images/publications/froggie/highres/froggie06_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie07_gallery.png',  highRes: 'images/publications/froggie/highres/froggie07_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie08_gallery.png',  highRes: 'images/publications/froggie/highres/froggie08_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie09_gallery.png',  highRes: 'images/publications/froggie/highres/froggie09_highres.jpg' },
        { gallery: 'images/publications/froggie/gallery/froggie10_gallery.png',  highRes: 'images/publications/froggie/highres/froggie10_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books01_gallery.png',  highRes: 'images/publications/books/highres/books01_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books02_gallery.png',  highRes: 'images/publications/books/highres/books02_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books03_gallery.png',  highRes: 'images/publications/books/highres/books03_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books04_gallery.png',  highRes: 'images/publications/books/highres/books04_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books05_gallery.png',  highRes: 'images/publications/books/highres/books05_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books06_gallery.png',  highRes: 'images/publications/books/highres/books06_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books07_gallery.png',  highRes: 'images/publications/books/highres/books07_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books08_gallery.png',  highRes: 'images/publications/books/highres/books08_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books09_gallery.png',  highRes: 'images/publications/books/highres/books09_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books10_gallery.png',  highRes: 'images/publications/books/highres/books10_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books11_gallery.png',  highRes: 'images/publications/books/highres/books11_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books12_gallery.png',  highRes: 'images/publications/books/highres/books12_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books13_gallery.png',  highRes: 'images/publications/books/highres/books13_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books14_gallery.png',  highRes: 'images/publications/books/highres/books14_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books15_gallery.png',  highRes: 'images/publications/books/highres/books15_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books16_gallery.png',  highRes: 'images/publications/books/highres/books16_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books17_gallery.png',  highRes: 'images/publications/books/highres/books17_highres.jpg' },
        { gallery: 'images/publications/books/gallery/books18_gallery.png',  highRes: 'images/publications/books/highres/books18_highres.jpg' },
        { gallery: 'images/publications/daisy/gallery/daisy_front_gallery.png',  highRes: 'images/publications/daisy/highres/daisy_front_highres.jpg' },
        { gallery: 'images/publications/daisy/gallery/daisy_inside_gallery.png',  highRes: 'images/publications/daisy/highres/daisy_inside_highres.jpg' }
    ];


    this.packagingImages = [

        { gallery: 'images/packaging/cariluzen/gallery/cariluzen01_gallery.png',  highRes: 'images/packaging/cariluzen/highres/cariluzen01_highres.jpg' },
        { gallery: 'images/packaging/cariluzen/gallery/cariluzen02_gallery.png',  highRes: 'images/packaging/cariluzen/highres/cariluzen02_highres.jpg' },
        { gallery: 'images/packaging/cariluzen/gallery/cariluzen03_gallery.png',  highRes: 'images/packaging/cariluzen/highres/cariluzen03_highres.jpg' },
        { gallery: 'images/packaging/devinci/gallery/devinci01_gallery.png',  highRes: 'images/packaging/devinci/highres/devinci01_highres.jpg' },
        { gallery: 'images/packaging/devinci/gallery/devinci02_gallery.png',  highRes: 'images/packaging/devinci/highres/devinci02_highres.jpg' },
        { gallery: 'images/packaging/devinci/gallery/devinci03_gallery.png',  highRes: 'images/packaging/devinci/highres/devinci03_highres.jpg' },
        { gallery: 'images/packaging/froggie/gallery/froggie_gallery.png',  highRes: 'images/packaging/froggie/highres/froggie_highres.png' },
        { gallery: 'images/packaging/froggie/gallery/froggie_game_gallery.png',  highRes: 'images/packaging/froggie/highres/froggie_game_highres.jpg' },
        { gallery: 'images/packaging/revo/gallery/revo01_gallery.png',  highRes: 'images/packaging/revo/highres/revo01_highres.jpg' },
        { gallery: 'images/packaging/revo/gallery/revo02_gallery.png', highRes: 'images/packaging/revo/highres/revo02_highres.jpg' },
        { gallery: 'images/packaging/casa/gallery/casa01_gallery.png',  highRes: 'images/packaging/casa/highres/casa01_highres.jpg' },
        { gallery: 'images/packaging/casa/gallery/casa02_gallery.png',  highRes: 'images/packaging/casa/highres/casa02_highres.jpg' },
        { gallery: 'images/packaging/casa/gallery/casa03_gallery.png',  highRes: 'images/packaging/casa/highres/casa03_highres.jpg' }

    ];

    this.identityImages = [
        { gallery: 'images/identity/azinis/gallery/azinis_gallery.png', highRes: 'images/identity/azinis/highres/azinis_highres.jpg'},
        { gallery: 'images/identity/azinis/gallery/azinis_display_gallery.png', highRes: 'images/identity/azinis/highres/azinis_display_highres.jpg'},
        { gallery: 'images/identity/wildclaw/gallery/wc_logo1_gallery.jpg',  highRes: 'images/identity/wildclaw/highres/wc_logo1_highres.jpg' },
        { gallery: 'images/identity/wildclaw/gallery/wc_logo2_gallery.jpg',  highRes: 'images/identity/wildclaw/highres/wc_logo2_highres.jpg' },
        { gallery: 'images/identity/wildclaw/gallery/wc_logo3_gallery.png',  highRes: 'images/identity/wildclaw/highres/wc_logo3_highres.jpg' },
        { gallery: 'images/identity/wildclaw/gallery/wc_logo4_gallery.png',  highRes: 'images/identity/wildclaw/highres/wc_logo4_highres.jpg' },
        { gallery: 'images/identity/wildclaw/gallery/wc_brand1_gallery.png',  highRes: 'images/identity/wildclaw/highres/wc_brand1_highres.jpg' },
        { gallery: 'images/identity/northcraft/gallery/nc_logo_gallery.jpg',  highRes: 'images/identity/northcraft/highres/nc_logo_highres.jpg' },
        { gallery: 'images/identity/northcraft/gallery/nc_brand1_gallery.png',  highRes: 'images/identity/northcraft/highres/nc_brand1_highres.jpg' },
        { gallery: 'images/identity/northcraft/gallery/nc_bb_gallery.png',  highRes: 'images/identity/northcraft/highres/nc_bb_highres.jpg' },
        { gallery: 'images/identity/bohlin/gallery/b_logo_gallery.jpg',  highRes: 'images/identity/bohlin/highres/b_logo_highres.jpg' },
        { gallery: 'images/identity/bohlin/gallery/bbrand1_gallery.png',  highRes: 'images/identity/bohlin/highres/bbrand1_highres.png' },
        { gallery: 'images/identity/bohlin/gallery/bb_gallery.png',  highRes: 'images/identity/bohlin/highres/bb_highres.jpg' },
        { gallery: 'images/identity/zymens/gallery/zymen01_gallery.png',  highRes: 'images/identity/zymens/highres/zymen01_highres.jpg' },
        { gallery: 'images/identity/zymens/gallery/zymen02_gallery.png',  highRes: 'images/identity/zymens/highres/zymen02_highres.jpg' }

    ];

    this.webImages = [
        { gallery: 'images/web/midnight_dazzle/gallery/md_home_gallery.png',  highRes: 'images/web/midnight_dazzle/highres/md_home_highres.jpg' },
        { gallery: 'images/web/midnight_dazzle/gallery/md_earring_gallery.png',  highRes: 'images/web/midnight_dazzle/highres/md_earring_highres.jpg' },
        { gallery: 'images/web/midnight_dazzle/gallery/md_earring1_gallery.png',  highRes: 'images/web/midnight_dazzle/highres/md_earring1_highres.jpg' },
        { gallery: 'images/web/midnight_dazzle/gallery/md_earring2_gallery.png',  highRes: 'images/web/midnight_dazzle/highres/md_earring2_highres.jpg' },
        { gallery: 'images/web/midnight_dazzle/gallery/md_earring3_gallery.png',  highRes: 'images/web/midnight_dazzle/highres/md_earring3_highres.jpg' },
        { gallery: 'images/web/midnight_dazzle/gallery/md_shopping_gallery.jpg',  highRes: 'images/web/midnight_dazzle/highres/md_shopping_cart_highres.jpg' },
        { gallery: 'images/web/heal/gallery/home_gallery.png',  highRes: 'images/web/heal/highres/heal_home_highres.jpg' },
        { gallery: 'images/web/heal/gallery/welcome_gallery.png',  highRes: 'images/web/heal/highres/heal_welcome_highres.jpg' },
        { gallery: 'images/web/heal/gallery/gallery_gallery.png',  highRes: 'images/web/heal/highres/heal_gallery_highres.jpg' },
        { gallery: 'images/web/heal/gallery/about_gallery.png',  highRes: 'images/web/heal/highres/heal_about_highres.jpg' },
        { gallery: 'images/web/heal/gallery/contact_gallery.png',  highRes: 'images/web/heal/highres/heal_contact_highres.jpg' },
        { gallery: 'images/web/cariluzen/gallery/home_gallery.png',  highRes: 'images/web/cariluzen/highres/wine_home_highres.jpg' },
        { gallery: 'images/web/cariluzen/gallery/gallery_gallery.png',  highRes: 'images/web/cariluzen/highres/wine_gallery_highres.jpg' },
        { gallery: 'images/web/cariluzen/gallery/event_gallery.png',  highRes: 'images/web/cariluzen/highres/wine_events_highres.jpg' }

    ];


	this.processImages = [
		{ gallery: 'images/process/gallery/process01_gallery.png', highRes: 'images/process/highres/process01_highres.jpg' },
        { gallery: 'images/process/gallery/process02_gallery.png', highRes: 'images/process/highres/process02_highres.jpg' },
        { gallery: 'images/process/gallery/process03_gallery.png', highRes: 'images/process/highres/process03_highres.jpg' },
        { gallery: 'images/process/gallery/process04_gallery.png', highRes: 'images/process/highres/process04_highres.jpg' },
        { gallery: 'images/process/gallery/process05_gallery.png', highRes: 'images/process/highres/process05_highres.jpg' },
        { gallery: 'images/process/gallery/process06_gallery.png', highRes: 'images/process/highres/process06_highres.jpg' },
        { gallery: 'images/process/gallery/process07_gallery.png', highRes: 'images/process/highres/process07_highres.jpg' },
        { gallery: 'images/process/gallery/process08_gallery.png', highRes: 'images/process/highres/process08_highres.jpg' },
        { gallery: 'images/process/gallery/process09_gallery.png', highRes: 'images/process/highres/process09_highres.jpg' },
        { gallery: 'images/process/gallery/process10_gallery.png', highRes: 'images/process/highres/process10_highres.jpg' },
        { gallery: 'images/process/gallery/process11_gallery.png', highRes: 'images/process/highres/process11_highres.jpg' },
        { gallery: 'images/process/gallery/process12_gallery.png', highRes: 'images/process/highres/process12_highres.jpg' },
        { gallery: 'images/process/gallery/process13_gallery.png', highRes: 'images/process/highres/process13_highres.jpg' },
        { gallery: 'images/process/gallery/process14_gallery.png', highRes: 'images/process/highres/process14_highres.jpg' },
        { gallery: 'images/process/gallery/process15_gallery.png', highRes: 'images/process/highres/process15_highres.jpg' },
        { gallery: 'images/process/gallery/process16_gallery.png', highRes: 'images/process/highres/process16_highres.jpg' },
        { gallery: 'images/process/gallery/process17_gallery.png', highRes: 'images/process/highres/process17_highres.jpg' },
        { gallery: 'images/process/gallery/process18_gallery.png', highRes: 'images/process/highres/process18_highres.jpg' },
        { gallery: 'images/process/gallery/process19_gallery.png', highRes: 'images/process/highres/process19_highres.jpg' },
        { gallery: 'images/process/gallery/process20_gallery.png', highRes: 'images/process/highres/process20_highres.jpg' },
        { gallery: 'images/process/gallery/process21_gallery.png', highRes: 'images/process/highres/process21_highres.jpg' },
        { gallery: 'images/process/gallery/process22_gallery.png', highRes: 'images/process/highres/process22_highres.jpg' },
        { gallery: 'images/process/gallery/process23_gallery.png', highRes: 'images/process/highres/process23_highres.jpg' },
        { gallery: 'images/process/gallery/process24_gallery.png', highRes: 'images/process/highres/process24_highres.jpg' },
        { gallery: 'images/process/gallery/process25_gallery.png', highRes: 'images/process/highres/process25_highres.jpg' },
        { gallery: 'images/process/gallery/process26_gallery.png', highRes: 'images/process/highres/process26_highres.jpg' },
        { gallery: 'images/process/gallery/process27_gallery.png', highRes: 'images/process/highres/process27_highres.jpg' },
        { gallery: 'images/process/gallery/process28_gallery.png', highRes: 'images/process/highres/process28_highres.jpg' }




    ];




	//-------------------------------------------------------------------------
	//
	// Methods
	//
	//-------------------------------------------------------------------------

	/**
	 * @param page
	 */
	this.getImagesByPage = function(page)
	{
		var me = model.ImageProxy;

		switch(page)
		{
            case enums.pages.printGallery:
                return me.printImages;
            case enums.pages.publicationGallery:
                return me.publicationImages;
            case enums.pages.packagingGallery:
                return me.packagingImages;
            case enums.pages.identityGallery:
				return me.identityImages;
            case enums.pages.webGallery:
                return me.webImages;
            case enums.pages.processGallery:
                return me.processImages;

		}

		return [];
	};
}

model.ImageProxy = model.ImageProxy || new ImageProxy();