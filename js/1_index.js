window.onload = function () {
    let images = [
        '../img/1_home/banner_home.jpg',
        '../img/header_icon/logo.svg',
        '../img/1_home/scroll_arrow.svg',
    ];

    images.forEach((src) => {
        preload(src);
    })
}

let preload = src => {
    let img = new Image();
    img.src = src;
};

// 輪播
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
