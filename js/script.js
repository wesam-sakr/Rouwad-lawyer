var bodyDir = $('body').css('direction')
console.log(bodyDir)
var dirAr
if(bodyDir == "rtl"){
  dirAr= true
}
else{
  dirAr = false
}

console.log($('link[title=ltr]')[0])



$('#loading').fadeOut(500);
// let screen = $(window).width();
// console.log(screen);
// $('.curve').css({
//     "width":  + "" + screen,"height" : screen * .5,"border-top-left-radius":  (screen * 2),"border-top-right-radius": ($screen * 2)
// })
// $('.curve.top').css()

/* -------------------------------- jquery -------------------------------- */ 
// Dropdown Menu

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:2
            }
        }
    })
});

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar[0].offsetHeight ;


// make nav bar static on scroll 
window.addEventListener("scroll" , function(){
    if (this.document.documentElement.scrollTop >= sticky) {
        // $(navbar).css("position", "unset");
        $(navbar).addClass("bg-main-color");
    } else {
        $(navbar).removeClass("bg-main-color")
        // $(navbar).css("position", "sticky");
    }
})

// make nav bar static on scroll 
// if ($("#home").length > 0) {
//     if (this.document.documentElement.scrollTop >= sticky) {
//         $(navbar).addClass("bg-main-color");
//     } else {
//         $(navbar).removeClass("bg-main-color")
//     }
// }
// else{
//     $(navbar).addClass("bg-main-color")
// }

$('.partners .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    rtl:true,
    autoplay:true,
    autoplayTimeout:20000,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:4,
        },
        1000:{
            items:6,
        }
    }
});

$("header .owl-carousel").owlCarousel({
    nav: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    items: 1,
    rtl: dirAr,
    dots: true,
    margin: 20
  });

  $('.staff .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    rtl:true,
    autoplay:true,
    autoplayTimeout:20000,
    nav:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});


$("#testimonial-slider").owlCarousel({
    loop:true,
    margin:10,
    center: true,
    responsiveClass:true,
    rtl:true,
    autoplay:true,
    autoplayTimeout:20000,
    nav:false,
    rtl: dirAr,
    items: 1.5,
    responsive:{
        0:{
            items:1,
        },
        992:{
            items:1.5,
        }
    }
});

$('.op-pro-filter').click(function () {
    $(this).toggleClass('active');
    $('.filter').slideToggle();
});

var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

// $('select').niceSelect();
