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
$(function(){
  if($.support.safari) {
    alert("this is safari!");
  };
});

$(document).ready(function(){
  var brow= $.support;
  var bInfo="";
  if(brow.msie){bInfo="MicrosoftInternetExplorer" brow.version;}
  if(brow.mozilla){bInfo="MozillaFirefox" brow.version;}
  if(brow.safari){bInfo="AppleSafari" brow.version;}
  if(brow.opera){bInfo="Opera" brow.version;}
  alert(bInfo);
});


// go-top
$(function(){
  $("#go_top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });

});
