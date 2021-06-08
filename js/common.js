// 偵測作業系統
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

console.log('Your OS: '+OSName);

if (navigator.appVersion.indexOf("Win")!=-1){
  $("div.bg_block").css('transform','translate(-48%, -48%)');
} else {
  $("div.bg_block").css('transform','translate(-50%, -50%)');
};

// 側邊導覽列
$(function(){
  // 點擊按鈕，選單和遮罩顯現，
  $("div.menu_bt").on("click", function(){
    // $(this).css("backgroundImage", "url(../img/header_icon/close.svg)");
    $("div.mask").fadeToggle();
    $("div.mobile_navbar").fadeToggle();
  });
  // 下拉選單縮放
  $("div.order_flower_mobile").on("click", function(){
    $("ul.flower_list_mobile").slideToggle();

  });
  // 點擊遮罩，其他東西消失
  $("div.mask").on("click", function(){
    $(this).fadeToggle();
    $("div.mobile_navbar").fadeToggle();
    // $("div.menu_bt").css("backgroundImage", "url(../img/header_icon/menu.svg)");
  });
});
