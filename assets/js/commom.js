var easierMake="make";
var easierMake1="your personal investing";
var easierMake2="easier"; 
$(".easierMake").text(easierMake)
$(".easierMake1").text(easierMake1)
$(".easierMake2").text(easierMake2)
var userInfo = JSON.parse(localStorage.getItem("ploutoUserInfo"));
var htmlHome = `<a href="index.html"  class="color_">Home</a>`
$(".indexHtml").append(htmlHome)
var htmlAbout = `<a href="index.html#AboutUs" class="color_">About Us</a>`;
$(".htmlAbout").append(htmlAbout)
var htmlPartner = `<a href="index.html#partner" class="color_">Partner</a>`
$(".htmlPartner").append(htmlPartner)
var htmlCustomerStorie = `<a href="index.html#htmlCustomerStories" class="color_"> Customer Stories</a>`
$(".htmlCustomerStories").append(htmlCustomerStorie)
var htmlService= `<a href="javascript:;" class="color_">Service</a>
<ul>
<li><a href="stockVaneService.html" class="color_">Stock vane</a></li>
<li><a href="SignalsService.html" class="color_"> Signals</a></li> 
</ul>
`
$(".htmlService").append(htmlService)

var htmlBanner =
  `<li><a href="stockvane.html?idx=3" class="color_">Stock vane</a></li>
  <li><a href="advancedmember.html?idx=7" class="color_">Advanced member</a></li>
<li><a href="intermediatemember.html?idx=6" class="color_">Intermediate member</a></li>
<li><a href="primarymember.html?idx=5" class="color_">Primary member</a></li>
<li><a href="silvermembers.html" class="color_">Vip Club</a></li>
<li><a href="starvip.html?idx=10" class="color_">Star vip</a></li>
 
`
var htmlEasier = `<img src="assets/images/banner_1.png" alt="" srcset="">
		<div class="content-text color_ fontSize42">
			<div class="fontSize59 fontWeightAll scales nowrapspace"> make your personal investing easier</div>
      <div class="login-row-style-row h-">
      <div class="login-row-style">
			<div class=' h-l-f familyNarrow color_ fontSize16 fontWeight400'>The Plouto Group is one of the world's leading investment</div>
			<div class='h-l-f familyNarrow color_ fontSize16 fontWeight400'>service,advisory and risk management solutions providers</div>
      </div>
      <div class="login color_ loginStock fontSize16">
			Login account
			<img src="assets/images/right.png" alt="" srcset="">
		</div>
		</div>
		</div>
		 `

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
    <div class="fontSize16 color_8E paddingBottom8">Features</div>
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

$('.htmlBanners').append(htmlBanner);
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
  window.location.href = "login.html?params=" + v;
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
  $(".name-user").text('Welcome ' + userInfo.username)
}


$("#vip3").click(function () {

  window.location.href = "stockvane.html?idx=3";

});
$("#vip11").click(function () {

  window.location.href = "silvermembers.html";

});
$("#vip5").click(function () {

  window.location.href = "primarymember.html?idx=5";

});
$("#vip6").click(function () {

  window.location.href = "intermediatemember.html?idx=6";

});
$("#vip7").click(function () {

  window.location.href = "advancedmember.html?idx=7";

});
$(".starvip10").click(function () {

  window.location.href = "starvip.html?idx=10";

});

 
$(".orderingPrivacy").click(function () {

  window.location.href = "privacyPolicy.html";

});

// 轮播
function AutoScroll(obj) {
  $(obj).find("ul:first").animate({
    marginTop: "-54px"
  }, 1000, function () {
    $(this).css({
      marginTop: "0px"
    }).find("li:first").appendTo(this);
  });
}
$(document).ready(function () {
  setInterval('AutoScroll("#s1")', 3000);
});

function email(email) {
  return email.replace(/(.{0,3}).*@(.*)/, "$1***@$2")
}

$.ajax({
  type: "get",
  url: `${baseUrl}/noauth/getorderlist?goods_id=${getUrlParams('idx') || ''}`,
  dataType: "json",
  success: function (res) {
    $.each(res.data.list, function (index, data) {
      var emails = email(data.user_email)
      var op22 = `<li><span> </span>${emails} has just subscribed to the ${data.goods_title}</li>`;
      $("#getorderlist").append(op22);
    });
  },
});

if (userInfo?.token) {
  $.ajax({
    type: "get",
    url: `${baseUrl}/user/smartmoney/index?is_end=0`,
    dataType: "json",
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
    success: function (res) {
      let { list, status } = res.data;
      var op22 = "";
      console.log("股票信息", res)
      if (list.length > 0) {
        $.each(list, function (index, data) {
          op22 = `<div class="producInter">
            <div class="produc-list-">
              <div class="produc-list">
                <div class="fontSize16 m-l10 c-style color_f ${data.type == 0 ? 'color_18751C' : 'color_F11539'}">${data.type == 0 ? 'bullish' : 'bearish'}</div>
                <div class="fontSize24 m-r10  name-style color_32ECBD">${data.stock_no}</div>
              </div>
            </div>
          </div>`
          $(".produc-list-data").append(op22);

        });
      } else {
        if (!status) {
          op22 = `<img class="nodatavip" src="assets/images/nouservip.png"/>`
          $(".produc-list-data").append(op22);
        }
      }
    },
  });
}
// 月季年数据

if (userInfo?.token) {
  $.ajax({
    type: "get",
    url: `${baseUrl}/user/product/getlist?is_end=0&type_id=0`,
    dataType: "json",
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
    success: function (res) {
      let { list, status } = res.data;
      var op23 = "";
      console.log("股票信息", res)
      if (list.length > 0) {
        $.each(list, function (index, data) {
          // op22 = `<div class="producInter">
          //   <div class="produc-list-">
          //     <div class="produc-list">
          //       <div class="fontSize24 c-style color_f ${data.type==0 ? 'color_18751C':'color_F11539'}">${data.type == 0 ? 'c' : 'p'}</div>
          //       <div class="fontSize24  name-style color_32ECBD">${data.stock_no}</div>
          //     </div>
          //   </div>
          // </div>`

          op23 = `<div class="producInter">
            <div class="produc-list-">
              <div class="produc-list-100 b-b paddingBottom">
                <div class="produc-list-c">
                  <div class="fontSize16 c-style color_f ${data.type == 0 ? 'color_18751C' : 'color_F11539'}">${data.type == 0 ? 'bullish' : 'bearish'} </div>
                  <span class="color_32ECBD m-l-r-20">${data.stock_name}</span><span class="color_8E">${data.CreatedAt.substring(0, 10)}</span>
                </div>
                <div class="fontSize24  name-style color_32ECBD displaySpaceAround">
                  <div>
                    <div class="color_f fontSize16">$${data.buy_price}</div>
                    <div class="color_8E fontSize12">Buy</div>
                  </div>
                  <div>
                    <div class="color_f fontSize16">$${data.sale_price}</div>
                    <div  class="color_8E fontSize12">Sell</div>
                  </div>
                  <div>
                    <div class="color_f fontSize16">${data.reach}%</div>
                    <div class="color_8E fontSize12">Reach</div>
                  </div>
                </div>
              </div>
            </div>
            </div>`
          $(".produc-list-data-y-j-n").append(op23);

        });
      } else {
        if (!status) {
          op23 = `<img class="nodatavip" src="assets/images/nouservip.png"/>`
          $(".produc-list-data-y-j-n").append(op23);
        }
      }
    },
  });
}


$(".login-out-style").click(()=>{
  localStorage.removeItem("ploutoUserInfo");
  setTimeout(()=>{  toast('login out success')},1000)
  window.location.href = "index.html";
})
// period   

if (userInfo?.token) {
  $.ajax({
    type: "get",
    url: `${baseUrl}/user/getordernum?goods_id=${getUrlParams('idx')}`,
    dataType: "json",
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
    success: function (res) { 
      let {total} = res.data
      if(total>0){
        $(".periodData").append(period + total);
      }
      
    },
  });
}