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

// safari瀏覽器微調
function detectBrowser(){
  var sAgent = navigator.userAgent.toLowerCase();
  this.isSa = (sAgent.indexOf("safari")!=-1);
};

var oBrowser = new detectBrowser();
if (oBrowser.isSa && !oBrowser.isChr){
  $("div.content_2").css("transform", "translate(-140%, -48%)");
}


// if(is.safari()){
//   console.log("true");
//  $("div.content_2").css("transform", "translate(-140%, -48%)");
// }else{
//   console.log("no");
// };

// $(document).ready(function(){
//   var brow= $.support;
//   var bInfo="";
//   if(brow.msie){bInfo="MicrosoftInternetExplorer" brow.version;}
//   if(brow.mozilla){bInfo="MozillaFirefox" brow.version;}
//   if(brow.safari){bInfo="AppleSafari" brow.version;}
//   if(brow.opera){bInfo="Opera" brow.version;}
//   alert(bInfo);
// });


// go-top
$(function(){
  $("#go_top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });

});
