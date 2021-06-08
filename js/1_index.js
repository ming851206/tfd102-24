window.onload = function () {
    let images = [
        './img/1_home/banner_home.jpg',
        './img/header_icon/logo.svg',
        './img/1_home/scroll_arrow.png'
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

// 不同瀏覽器微調
function detectBrowser(){
  var sAgent = navigator.userAgent.toLowerCase();
  this.isSa = (sAgent.indexOf("safari")!=-1);
  this.isChr = (sAgent.indexOf("chrom")!=-1);
}
var oBrowser = new detectBrowser();
if (oBrowser.isSa && !oBrowser.isChr){
  if (!(window.innerWidth <= 1200)){
    $("div.content_2").css("transform", "translate(-140%, -48%)");
  };
  if (!(window.innerWidth >= 1200 && window.innerWidth <= 576)){
    $("div.content_2").css("transform", "translate(-130%, -46%)");
  };
};


// go-top
$(function(){
  $("#go_top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });

});
