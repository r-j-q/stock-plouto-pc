var userInfo = JSON.parse( localStorage.getItem("ploutoUserInfo"));


var htmlEasier = `<img src="assets/images/banner_1.png" alt="" srcset="">
		<div class="content-text color_ fontSize42">
			<div class="fontSize48 fontWeightAll scales">Choose Pluto to make your personal investing easier!</div>
			<div>The Plouto Group is one of the world's leading investment</div>
			<div>service,advisory and risk management solutions providers</div>
		</div>
		<div class="login color_ loginStock">
			Login account
			<img src="assets/images/right.png" alt="" srcset="">
		</div>`

$(".htmlEasier").append(htmlEasier)
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
    <div class="fontSize16 color_8E agreement">Refund Agreement</div>
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

$('.footer-ui').append(htmlFooter);

$(".loginStock").click(function () {
  if (userInfo == null) {
    window.location.href = "login.html";
  }
});
$(".indexHtml").click(function () {
  if (userInfo == null) {
    window.location.href = "index.html";
  }
});
$(".agreement").click(function () {
    window.location.href = "agreement.html";
 
});
 
function loginH(v) {
localStorage.removeItem("ploutoUserInfo");
 window.location.href = "login.html?params="+v;
}

function getUrlParams(key) {
  var url = window.location.search.substr(1);
  if (url == '') {
    return false;
  }
  var paramsArr = url.split('&');
  for (var i = 0; i < paramsArr.length; i++) {
    var combina = paramsArr[i].split("=");
    if (combina[0] == key) {
      return combina[1];
    }
  }
  return false;
}

if (userInfo == null) { 
  $(".loginStock").show();

  } else { 
  $(".loginStock").hide(); 
  $(".name-user").text('Welcome '+userInfo.username)
}