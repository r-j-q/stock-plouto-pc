var userInfo = localStorage.getItem("ploutoUserInfo");
$(".loginStock").click(function () {
  if (userInfo == null) {
    window.location.href = "login.html";
  }
});





var htmlFooter = `<div class="footer-content">
  <div class="footer-content-list">
    <div class="footer-ttile color_ fontWeight400 paddingBottom">Stock Plouto</div>
    <div class="fontSize16 color_8E paddingBottom8">Stock Plouto is the leading provider of real-time
      market news, market
      analysis, trading ideas, trade recommendations and signals for stocks. Stock Plouto provides
      strategies on stock investing and trading, as well as in-depth analysis, trading tips and expert
      advice.</div>
  </div>
  <div class="footer-content-list">
    <div class="footer-ttile color_ fontWeight400 paddingBottom">About Us</div>
    <div class="fontSize16 color_8E paddingBottom8">Home </div>
    <div class="fontSize16 color_8E paddingBottom8"> Overview </div>
    <div class="fontSize16 color_8E paddingBottom8"> Pricing</div>
    <div class="fontSize16 color_8E">Features</div>
  </div>
  <div class="footer-content-list">
    <div class="footer-ttile color_ fontWeight400 paddingBottom">Contact Us</div>
    <div class="fontSize16 color_8E paddingBottom8">E-mail: stock.plouto@gmail.com </div>
    <div class="fontSize16 color_8E paddingBottom8"> Phone: 852 5570 8229 </div>
    <div class="fontSize16 color_8E"> Locations: Flat 1512-15/f lucky cir no165-171 wan chai rd wan chaihongkong</div>
  </div>
</div>
<div class="footer-copy color_ fontWeight400">
  Copyright © 2022.Stock Plouto All rights reserved.
</div>`

$('.footer-ui').append(htmlFooter)