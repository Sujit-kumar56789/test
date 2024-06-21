
/* sticky_header*/

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  /*End Stciky header*/
  
  /**/
   /**
     * Mobile nav toggle
     */
   const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
   function mobileNavToogle() {
     document.querySelector('body').classList.toggle('mobile-nav-active');
     mobileNavToggleBtn.classList.toggle('bi-list');
     mobileNavToggleBtn.classList.toggle('bi-x');
   }
   mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
   /**
    * Hide mobile nav on same-page/hash links
    */
   document.querySelectorAll('#nav-menu a').forEach(navmenu => {
     navmenu.addEventListener('click', () => {
       if (document.querySelector('.mobile-nav-active')) {
         mobileNavToogle();
       }
     });
  
   });
  
   /**
    * Toggle mobile nav dropdowns
    */
   document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
     navmenu.addEventListener('click', function(e) {
       if (document.querySelector('.mobile-nav-active')) {
         e.preventDefault();
         this.parentNode.classList.toggle('active');
         this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
         e.stopImmediatePropagation();
       }
     });
   });
  
   /* collapse */
   $('.accordion__header').click(function(e) {
      e.preventDefault();
      var currentIsActive = $(this).hasClass('is-active');
      $(this).parent('.accordion').find('> *').removeClass('is-active');
      if(currentIsActive != 1) {
          $(this).addClass('is-active');
          $(this).next('.accordion__body').addClass('is-active');
      }
  });

// footer js mobile
// Dropdown  Strt
$(".select").click(function() {
  var is_open = $(this).hasClass("open");
  if (is_open) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

$(".select li").click(function() {

  var selected_value = $(this).html();
  var first_li = $(".select li:first-child").html();

  $(".select li:first-child").html(selected_value);
  $(this).html(first_li);

});

$(document).mouseup(function(event) {

  var target = event.target;
  var select = $(".select");

  if (!select.is(target) && select.has(target).length === 0) {
    select.removeClass("open");
  }

});
// Dropdown  End
// Dropdown 01
$(".select1").click(function() {
  var is_open = $(this).hasClass("open");
  if (is_open) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

$(".select1 li").click(function() {

  var selected_value = $(this).html();
  var first_li = $(".select1 li:first-child").html();

  $(".select1 li:first-child").html(selected_value);
  $(this).html(first_li);

});

$(document).mouseup(function(event) {

  var target = event.target;
  var select = $(".select1");

  if (!select.is(target) && select.has(target).length === 0) {
    select.removeClass("open");
  }

});
// Dropdown 01 End
// Dropdown 02
$(".select2").click(function() {
  var is_open = $(this).hasClass("open");
  if (is_open) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

$(".select2 li").click(function() {

  var selected_value = $(this).html();
  var first_li = $(".select2 li:first-child").html();

  $(".select2 li:first-child").html(selected_value);
  $(this).html(first_li);

});

$(document).mouseup(function(event) {

  var target = event.target;
  var select = $(".select2");

  if (!select.is(target) && select.has(target).length === 0) {
    select.removeClass("open");
  }

});
// Dropdown 02 End
// Dropdown 03
$(".select3").click(function() {
  var is_open = $(this).hasClass("open");
  if (is_open) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

$(".select3 li").click(function() {

  var selected_value = $(this).html();
  var first_li = $(".select3 li:first-child").html();

  $(".select3 li:first-child").html(selected_value);
  $(this).html(first_li);

});

$(document).mouseup(function(event) {

  var target = event.target;
  var select = $(".select3");

  if (!select.is(target) && select.has(target).length === 0) {
    select.removeClass("open");
  }

});


/* home page main slider*/
var swiper = new Swiper(".homesliderSwiper", {
    
  spaceBetween: 30,
  centeredSlides: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  //  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});
/* home page health organizatin slider*/

var swiper_organisation = new Swiper(".service_slider", {
  spaceBetween: 30,
  centeredSlides: false,
  autoplay: {
  delay: 2500,
   disableOnInteraction: false,
   },
   autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
   
    992: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  
    1200: {
      slidesPerView: 2.6,
      spaceBetween: 30,
    },
   
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  
});