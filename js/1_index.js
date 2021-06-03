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
var timer;
function autopaly(){
  timer = setInterval(function(){
    next.onclick()
  }, 3000);
}
autopaly();

var slider = document.getElementById("slider");
function stopplay(){
  clearInterval(timer);
}
slider.onmouseover = stopplay;
slider.onmouseout = autopaly;
