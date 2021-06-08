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

// 會員登入與註冊
$(function(){
  $("div.member_bt").on("click", function(){
    $("div.overlay").fadeIn();
  });
  $("div.close").on("click", function(){
    $("div.overlay").fadeOut();
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



// $(function(){
//   $("div.member_bt").on("click", function(){
//     var member_page = `
//     <div class="overlay">
//       <div class="bg">
//         <div class="member_list">
//           <h1 data-target="log_in" class="tab -on">會員登入</h2>
//           <h1 data-target="sign_in" class="tab">會員註冊</h2>
//         </div>
//
//         <form class="member_content">
//           <div class="member log_in">
//             <label>帳號：
//               <input type="text" placeholder="電子信箱">
//             </label>
//
//             <br>
//
//             <label>密碼：
//               <input type="password" placeholder="英文大小寫有別">
//             </label>
//
//             <br>
//
//             <p class="get_pw">忘記密碼</p>
//
//             <br>
//
//             <button type="submit" class="other log_in">登入</button>
//           </div>
//
//           <div class="member sign_in">
//             <label>使用者名稱：
//               <input type="text">
//             </label>
//
//             <br>
//
//             <label>電子信箱：
//               <input type="text">
//             </label>
//
//             <br>
//
//             <label>密碼：
//               <input type="password" placeholder="至少8個字元，包含英文字母及數字">
//             </label>
//
//             <br>
//
//             <label>確認密碼：
//               <input type="password">
//             </label>
//
//             <br>
//
//             <button type="submit" class="other">註冊</button>
//           </div>
//         </form>
//       </div>
//     </div>
//     `;
//
//     $("body").append("member_page");
//   });
// });
