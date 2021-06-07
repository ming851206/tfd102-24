window.onload = function () {
    let images = [
        '../img/6_product_page/banner.jpg',
        '../img/header_icon/logo.svg',
    ];

    images.forEach((src) => {
        preload(src);
    })
}

let preload = src => {
    let img = new Image();
    img.src = src;
};

// console.log(window.innerWidth);
// 輪播
// if(window.innerWidth <= 768){
  // $(document).ready(function(){
  //   $('.slider_container').slick({
  //     dots: false,
  //     infinite: false,
  //     speed: 500,
  //     fade: true,
  //     cssEase: 'linear'
  //   });
  // });
// };
