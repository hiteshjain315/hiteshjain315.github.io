/* ----------------------------------

Name: custom.js

------------------------------------- */


/*====================================================


	Table of Contents
	
		01. Scroll to top
		
*/



jQuery(document).ready(function($) {
	"use strict";



/*======================

	01. Scroll to top
	
========================*/


	$(window).scroll(function() {
		50 <= $(this).scrollTop() ? $("#return-to-top, #return-to-top-2").fadeIn(200) : $("#return-to-top, #return-to-top-2").fadeOut(200)
	}), $("#return-to-top, #return-to-top-2").on("click", function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500)
	});
	
	
});