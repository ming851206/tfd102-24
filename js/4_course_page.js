window.onload = function () {
    let images = [
        './img/4_course_page/banner.jpg',
        './img/header_icon/logo.svg',
    ];

    images.forEach((src) => {
        preload(src);
    })
}
let preload = src => {
    let img = new Image();
    img.src = src;
};

document.addEventListener("click", function(e){
  let img_1 = document.getElementsByClassName("img_1")[0];
  let img_2 = document.getElementsByClassName("img_2")[0];
  let img_3 = document.getElementsByClassName("img_3")[0];


  if(e.target.classList.contains("img_2-2")){
    img_1.classList.remove("-on");
    img_2.classList.add("-on");
    img_3.classList.remove("-on");
  }else if(e.target.classList.contains("img_3-3")){
    img_1.classList.remove("-on");
    img_2.classList.remove("-on");
    img_3.classList.add("-on");
  }else if(e.target.classList.contains("img_1-1")){
    img_1.classList.add("-on");
    img_2.classList.remove("-on");
    img_3.classList.remove("-on");
  }
});

// 不同瀏覽器微調

$(function(){
  if($.support.safari) {
    alert("this is safari!");
  };
});
