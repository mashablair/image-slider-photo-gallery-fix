$(document).ready(function () {
	'use strict';

    var photoGallery = new Swiper('#photoGallery .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 10,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev'
	    },
//        loop: true,
        keyboardControl: true,
//        autoplay: 4000,
        onSlideChangeEnd: function (swiper) {
            $('#photoGalleryCaption').html($('.swiper-slide.swiper-slide-active img').prop('alt')); // set first caption in the image viewer
            $('.swiper-slide.swiper-slide-active img').focus(); // set focus to the active slide's image
        }
    });
	
});
