// let menu_br_bt = document.getElementsByClassName("menu_br_bt");
//
// menu_br_bt.addEventListener("click", function(){
//   let mask = document.getElementsByClassName("mask");
//    mask.add();
//
//   let mobile_navbar = document.getElementsByClassName("mobile_navbar");
//   mobile_navbar.add();
// });

// 偵測作業系統
if (navigator.appVersion.indexOf("Win")!=-1){
  $("bg_block").css('transform','translate(-48%, -48%)');
} else {
  $("bg_block").css('transform','translate(-50%, -50%)');
};

  // 點擊按鈕，選單和遮罩顯現，
$(function(){
  $("div.menu_bt").on("click", function(){
    $(this).attr("url", "../img/header_icon/close.svg");
    $("div.mask").fadeToggle();
    $("div.mobile_navbar").fadeToggle();

  });
});

  // 點擊遮罩，其他東西消失
$(function(){
  $("div.mask").on("click", function(){
    $(this).fadeToggle();
    $("div.mobile_navbar").fadeToggle();

  });
});

  // 下拉選單縮放
$(function(){
  $("div.order_flower_mobile").on("click", function(){
    $("ul.flower_list_mobile").slideToggle();

  });

});
