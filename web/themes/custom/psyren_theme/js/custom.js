/* --------------------------------------------- 
Custom JS
-----------------------------------------------*/

function theme_menu() {

	//Main menu
	jQuery('#main-menu').smartmenus();

	//Mobile menu toggle
	jQuery('.navbar-toggle').click(function () {
		jQuery('.region-primary-menu').addClass('expand');
	});
	jQuery('.navbar-toggle-close').click(function () {
		jQuery('.region-primary-menu').removeClass('expand');
	});

	//Mobile drop-down menu
	if (jQuery(window).width() < 767) {
		jQuery(".region-primary-menu li a:not(.has-submenu)").click(function () {
			jQuery('.region-primary-menu').hide();
		});
	}

}

function theme_home() {

	//flexslider
	jQuery('.flexslider').flexslider({
		animation: "slide"
	});

}

jQuery(document).ready(function ($) {
	theme_menu();
	theme_home();
});