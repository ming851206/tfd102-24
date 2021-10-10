// 偵測作業系統
if (navigator.appVersion.indexOf("Win")!=-1){
  $("div.bg_block").css('transform','translate(-48%, -48%)');
} else {
  $("div.bg_block").css('transform','translate(-50%, -50%)');
};

// 側邊導覽列
$(function(){
  // 點擊按鈕，選單和遮罩顯現，
  $("div.menu_bt").on("click", function(){
    $("div.mask").fadeToggle();
    $("div.mobile_navbar").fadeToggle();
    $("html").css({
      position:" sticky",
      width: "100%",
    })
  });
  // 下拉選單縮放
  $("div.order_flower_mobile").on("click", function(){
    $("ul.flower_list_mobile").slideToggle();

  });
  // 點擊遮罩，其他東西消失
  $("div.mask").on("click", function(e){
    $(this).fadeToggle();
    $("div.mobile_navbar").fadeToggle();
    $("html").css({
      position: "static",
      width: "100%",
    });
  });
});

// 會員登入與註冊
$(function(){
  $("div.member_bt").on("click", function(){
    $("div.member_container").fadeIn();
    $("html").css({
        position: "sticky",
        width: "100%"
    })
  });
  $("div.close").on("click", function(){
    $("div.member_container").fadeOut();
    $("html").css({
      position: "static",
      width: "100%"
    })
  });

  $("div.overlay").on("click", function(){
    $("div.member_container").fadeOut();
    $("html").css({
      position: "static",
      width: "100%"
    })
  });

  $(function(){
    $("h1.member").on("click", function(e){
      e.preventDefault();

      $(this).closest("div").find("h1.member").removeClass("-on");
      $(this).addClass("-on");

      $("div.member").removeClass("-on");
      $("div.member." + $(this).attr("data-target")).addClass("-on");
    });
  });
});
