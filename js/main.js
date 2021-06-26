$(function() {

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false
        }
      },
    ]
  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
  });
});

//const menu_btn = document.getElementsByClassName('menu__btn')[0];
//menu_btn.onclick = (() => {
//  const menu_list = document.getElementsByClassName('menu__list')[0];
//
//  menu_list.classList.toggle('menu__list--active');
//});