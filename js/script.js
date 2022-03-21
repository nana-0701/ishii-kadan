$(function () {

	// hamburger menu
  $('#hamburger').click(function () {
    $('body').toggleClass('is-drawerActive')
  
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true')
      $('#js-header__menu').attr('area-hidden','false')
    } else {
      $(this).attr('aria-expanded', 'false')
      $('#js-header__menu').attr('area-hidden','true')
    }
  })
  $('.hamburger-bg').click(function () {
    $('body').removeClass('is-drawerActive')
    $('#hamburger').attr('aria-expanded', 'false')
    $('#js-header__menu').attr('area-hidden','true')
  })

  $('.header__list a[href]').on('click', function() {
    $('#hamburger').trigger('click');
  });


  // fixed header 
  var headNav = $('.js-header');
  var headLogo = $('.header__heading').find('img');

  $(window).on('load scroll', function () {
    if($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
      headNav.css({'top': '-100px'});
      headNav.addClass('fixed');
      headNav.animate({'top': 0},600);
      headLogo.attr('src', 'img/sub-header-logo.png');
    }
    else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true){
      headNav.removeClass('fixed');
      headLogo.attr('src', 'img/top-header-logo.png');
    }
  });


  // modal 
  var sX_syncerModal = 0 ;
  var sY_syncerModal = 0 ;

  function scrollposition(){
    var dElm = document.documentElement , dBody = document.body;
    sX_syncerModal = dElm.scrollLeft || dBody.scrollLeft;
    sY_syncerModal = dElm.scrollTop || dBody.scrollTop;
  };
  
  $('.header__btn, .header__item--sp').on('click', function () {
    scrollposition();
    $('.modal').toggleClass('is-show');
  });
  $('.modal__close').on('click', function () {
    window.scrollTo( sX_syncerModal , sY_syncerModal );
    $('.modal').toggleClass('is-show');
  });
  $('.modal__bg').on('click', function () {
    window.scrollTo( sX_syncerModal , sY_syncerModal );
    $('.modal').toggleClass('is-show');
  });


  // color change for modal > form > select > option
  const Target = $('.is-empty');
  $(Target).on('change', function(){
    if ($(Target).val() !== ""){
      $(this).removeClass('is-empty');
    } else {
      $(this).addClass('is-empty');
    }
  });


  // slider for smartphone only 
  function sliderSetting(){
    var width = $(window).width();

    if(width <= 767){
        $('.plan__inner').not('.slick-initialized').slick({
          centerMode:true,
          arrows: false
        });
    } else {
      $('.plan__inner.slick-initialized').slick('unslick');
    }
  }
  sliderSetting();
  $(window).resize( function() {
      sliderSetting();
  });


  // switch tab 
  $('.js-tab__trigger').on('click', function () {
    $('.js-tab__trigger').removeClass('is-active');
    $('.js-tab__target').removeClass('is-active');
    $(this).addClass('is-active');

    let id = $(this).data("id");
    $('#' + id).addClass('is-active')
  });
});


// flatpickr for modal > form 
flatpickr("#flatpickr", {
  locale:"ja",
  minDate:"today",
  mode: "range"
});

//aos.js
AOS.init({
  disable: function() {
    return window.innerWidth < 767;
  },
  offset: 100,
  easing: 'ease-in-sine',
  once: false,
});

