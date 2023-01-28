var userInfo = JSON.parse(localStorage.getItem("plutoUserInfo"));
// console.log("-------->>>>>",userInfo)
// (function(win, doc) {
//   'use strict';
//   var options = {
//     width: 750,
//     dpr: win.devicePixelRatio
//   };
//   var html = doc.documentElement,
//     width = html.getAttribute('data-width') || options.width,
//     dpr = html.getAttribute('data-dpr') || options.dpr,
//     viewPort = doc.querySelector('meta[name="viewport"]'),
//     rotate = win.onorientationchange ? 'orientationchange' : 'resize';

//   // 设置html fontSize
//   function setSize() {
//     var winWidth = win.innerWidth || html.clientWidth;
//     html.style.fontSize = 100 * winWidth / width + 'px';
//   };

//   // 设置 initial-scale
//   function setScale() {
//     setSize();
//     var viewContent = viewPort.getAttribute('content');
//     var reg = /initial-scale=(\d(.\d+)?)/i;
//     var matchRes = viewContent.match(reg);
//     var scale = 1 / parseInt(dpr);
//     if(matchRes && matchRes[1] == scale) {
//       return;
//     }
//     var newContent = viewContent.replace(reg, function(a, b) {
//       return a.replace(/\d(.\d+)?/i, scale);
//     });
//     viewPort.setAttribute('content', newContent);
//   };

//   win.addEventListener(rotate, setSize);
//   window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
//   requestAnimationFrame(setScale);
// }(window, document)); 


// header content
var headerBannersindex = ` <div class="page-wrapper" style="background-color: #1E1E1E;">
<header class="main-header clearfix">
    <nav class="main-menu clearfix">
        <div class="main-menu-wrapper clearfix">
            <div class="main-menu-wrapper-inner clearfix">
                <div class="main-menu-wrapper__left clearfix hdeer">
                    <div class="main-menu-wrapper__logo">
                        <a href=""><img src="assets/images/logo.png" style="width: 160px" alt=""></a>
                    </div>
                    <div class="main-menu-wrapper__main-menu">
                    <img class="  mobile-nav__toggler wwhh" src="assets/images/header-right-mobail.png"/>
                    
                        <ul class="main-menu__list">
                            <li><a href="index.html"> Home</a></li>

                            <li class="dropdown">
                                <a href="#">Product Center</a>
                                <ul>
                                    <li><a href="stockvane.html?idx=3">Stock vane</a></li>
                                    <li><a href="primarymember.html?idx=5">Primary member</a></li>
                                    <li><a href="intermediatemember.html?idx=6">Intermediate member</a></li>
                                    <li><a href="advancedmember.html?idx=7">Advanced member</a></li>
                                    <li><a href="starvip.html?idx=10">Star vip</a></li>
                                    <li><a href="silvermembers.html?idx=11">Silver members</a></li> 
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">Service</a>
                                <ul>
                                    <li><a href="stockVaneService.html">Stock vane</a></li>
                                    <li><a href="SignalsService.html"> Signals</a></li>
                                </ul>
                            </li>
                            <li><a href="newst.html">News</a></li>

                            <li><a href="index.html#htmlCustomerStories"> Customer Stories</a></li>
                            <li><a href="index.html#AboutUs"> About Us</a></li>

                            <li class="dropdown">
                            <a href="javascript:;" class="name-user">Sign In</a>
                            <ul> 
                            <li><a href="userTime.html">Me</a></li>
                            <li class="login-out-style"><a   href="login.html">Sign Out</a></li>
                        </ul>
                              </li>
                              
                            <li class="dropdown htmlUser"> 
                                <ul> 
                                    <li><a href="userTime.html">Me</a></li>
                                    <li class="login-out-style"><a   href="login.html">Sign Out</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</header>


<section class="main-slider main-slider-block">
    <div class="thm-swiper__slider">
        <div class="swiper-wrapper">
           
            <div class="container" style="width:100%">
            <div class="content-top htmlEasier"></div>
            </div>
        </div>
    </div>
 
    
</div>
</section>
</div>


<div class="mobile-nav__wrapper">
<div class="mobile-nav__overlay mobile-nav__toggler"></div>
<div class="mobile-nav__content">
    <span class="mobile-nav__close mobile-nav__toggler">x</span>

    <div class="logo-box">
        <a href="" aria-label="logo image"><img src="assets/images/logo.png" width="155" alt=""></a>
    </div>
    <div class="mobile-nav__container"></div>
</div>
</div>`
$(".headerBannersindex").append(headerBannersindex)


var headerBanners = ` <div class="page-wrapper" style="background-color: #1E1E1E;">
<header class="main-header clearfix">
    <nav class="main-menu clearfix">
        <div class="main-menu-wrapper clearfix">
            <div class="main-menu-wrapper-inner clearfix">
                <div class="main-menu-wrapper__left clearfix hdeer">
                    <div class="main-menu-wrapper__logo">
                        <a href=""><img src="assets/images/logo.png" style="width: 160px" alt=""></a>
                    </div>
                    <div class="main-menu-wrapper__main-menu">
                       
   <img class="mobile-nav__close mobile-nav__toggler wwhh" src="assets/images/header-right-mobail.png"/>

                        <ul class="main-menu__list">
                            <li><a href="index.html"> Home</a></li>

                            <li class="dropdown">
                                <a href="#">Product Center</a>
                                <ul>
                                    <li><a href="stockvane.html?idx=3">Stock vane</a></li>
                                    <li><a href="primarymember.html?idx=5">Primary member</a></li>
                                    <li><a href="intermediatemember.html?idx=6">Intermediate member</a></li>
                                    <li><a href="advancedmember.html?idx=7">Advanced member</a></li>
                                    <li><a href="starvip.html?idx=10">Star vip</a></li>
                                    <li><a href="silvermembers.html?idx=11">Silver members</a></li> 
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">Service</a>
                                <ul>
                                    <li><a href="stockVaneService.html">Stock vane</a></li>
                                    <li><a href="SignalsService.html"> Signals</a></li>
                                </ul>
                            </li>
                            <li><a href="newst.html">News</a></li>

                            <li><a href="index.html#htmlCustomerStories"> Customer Stories</a></li>
                            <li><a href="index.html#AboutUs"> About Us</a></li>

                            <li class="dropdown">
                                <a href="javascript:;" class="name-user">Sign In</a>
                                <ul> 
                                <li><a href="userTime.html">Me</a></li>
                                <li class="login-out-style loginOutStock"><a href="login.html">Sign Out</a> </li>
                                </ul>
                              </li>
                              
                            <li class="dropdown htmlUser"> 
                                <ul> 
                                    <li><a href="userTime.html">Me</a></li>
                                    <li class="login-out-style"><a  href="login.html">Sign Out</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</header>


<section class="main-slider">
    <div class="thm-swiper__slider">
        <div class="swiper-wrapper">
           
            <div class="container">
            <div class="content-top"></div>
            </div>
        </div>
    </div>
 
    
</div>
</section>
</div>


<div class="mobile-nav__wrapper">
<div class="mobile-nav__overlay mobile-nav__toggler "></div>
<div class="mobile-nav__content">
 
   <span class="mobile-nav__close mobile-nav__toggler">x</span>
    
    <div class="logo-box">
        <a href="" aria-label="logo image"><img src="assets/images/logo.png" width="155" alt=""></a>
    </div>
    <div class="mobile-nav__container"></div>
</div>
</div>`

$(".headerBannersHtml").append(headerBanners)

// header content end




var easierMake = "Make";
var easierMake1 = "your personal investing";
var easierMake2 = "easier";
$(".easierMake").text(easierMake)
$(".easierMake1").text(easierMake1)
$(".easierMake2").text(easierMake2)


// var htmlHome = `<a href="index.html"  class="color_">Home</a>`
// $(".indexHtml").append(htmlHome)
// var htmlAbout = `<a href="index.html#AboutUs" class="color_">About Us</a>`;
// $(".htmlAbout").append(htmlAbout)
// var htmlPartner = `<a href="index.html#partner" class="color_">Partner</a>`
// $(".htmlPartner").append(htmlPartner)
// var htmlCustomerStorie = `<a href="index.html#htmlCustomerStories" class="color_"> Customer Stories</a>`
// $(".htmlCustomerStories").append(htmlCustomerStorie)
// var htmlService= `<a href="javascript:;" class="color_">Service</a>
// <ul>
// <li><a href="stockVaneService.html" class="color_">Stock vane</a></li>
// <li><a href="SignalsService.html" class="color_"> Signals</a></li> 
// </ul>
// `
// $(".htmlService").append(htmlService)
// var htmlUser= `<a href="javascript:;" class="color_ name-user"></a>
// <ul>
// <li><a href="userTime.html" class="color_">Me</a></li> 
// <li class="login-out-style"><a href="javascript:;" class="color_ ">LOGIN OUT</a></li> 
// </ul>
// `
// $(".htmlUser").append(htmlUser)

// var htmlBanner =
//   `<li><a href="stockvane.html?idx=3" class="color_">Stock vane</a></li>
//   <li><a href="primarymember.html?idx=5" class="color_">Primary member</a></li>
// <li><a href="intermediatemember.html?idx=6" class="color_">Intermediate member</a></li>
// <li><a href="advancedmember.html?idx=7" class="color_">Advanced member</a></li>
// <li><a href="starvip.html?idx=10" class="color_">Star vip</a></li>
// <li><a href="silvermembers.html" class="color_">Vip Club</a></li>



var htmlEasier = `
<div class="pt" >
      <img src="assets/images/banner_1.png" alt="" class="contentImgheight">
       <div class="ps">
       <div class="fontSize2422 fontWeightAll scales nowrapspace"> Make your personal investing easier</div>
       <div class='mt100 h-l-f familyNarrow color_ fontSize16 fontWeight400'>The Pluto Group is one of the world's leading investment</div>
			<div class='h-l-f familyNarrow color_ fontSize16 fontWeight400'>service, advisory and risk management solutions providers.</div>
      </div>
      </div>
		 `
//  <img src="assets/images/banner_1.png" alt="" class="contentImgheight">
// <div class="content-text color_ fontSize42">
// 	<div class="fontSize59 fontWeightAll scales nowrapspace"> Make your personal investing easier</div>
//   <div class="login-row-style-row h-">
//   <div class="login-row-style">
// 	<div class=' h-l-f familyNarrow color_ fontSize16 fontWeight400'>The pluto Group is one of the world's leading investment</div>
// 	<div class='h-l-f familyNarrow color_ fontSize16 fontWeight400'>service,advisory and risk management solutions providers</div>
//   <div class="loginStock"></div>
//   </div>

// </div>
// </div>
var htmlEasierRegister = `<img src="assets/images/banner_1.png" alt="" class="contentImgheight800">
		<div class="displayRow100">
    <div class="bac500l displayRow500l">
			<div class="fontSize32 fontWeightAll scales nowrapspace textCenter"> Make your personal investing easier</div>
      <div class='m_t_100 p_10_ color_ fontSizeZHI fontWeight400'>The Pluto Group is one of the world's leading investment service, advisory and risk management solution provider</div>
		 
		<div class="loginStock"></div>
      </div>
    <div class="bac500r displayRow500r paddingAll">
    <div class="p-d-20 b3030">
    <div class="content-t-right">
    <div class="w_h_auto">
      <div class="logs-register1  fontSize32 color_">  
        Register
      </div> 
      <div class="content-t-right-list-register-add loginbackgroundColor_">
        <img class="w-20-301" src="assets/images/name-style.png" alt="" srcset="">
        <input type="text" id="username"   autocomplete="new-password" placeholder="Name"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor_" />


      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor_">

        <img class="w-20-301" src="assets/images/email.png" alt="" srcset="">
        <input type="text" id="email" placeholder="Enter Email" autocomplete="new-password"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor_" />


      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor_">
        <img class="w-20-301" src="assets/images/loginone.png" alt="" srcset="">
        <div class="col-center-login">
          <select name="" id="s1"  autocomplete="new-password" class="form-control-select color_f loginbackgroundColor_">
          </select>
          <span id="codeInit" class="color_f fontWeight400 fontSize16 border-right-2">009</span>
        </div>
        <input    id="phone"  autocomplete="new-password"  placeholder="Telephone" style="width:100%"
          
          onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "
          class="form-control1 color_f  loginbackgroundColor_ fontSize16" />
      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor_">

        <img class="w-20-301" src="assets/images/loginones.png" alt="" srcset="">
        <input type="text" id="code"  autocomplete="new-password" placeholder="Code"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor_" style="width: 100%;"/>
        <button class="btn_yzmbutton">
        verification code
        </button>

      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor_">

        <img class="w-20-301" src="assets/images/loginoneee.png" alt="" srcset="">
        <input id="password" placeholder="Create Password"  autocomplete="new-password" type="password"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor_" />


      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor_">

        <img class="w-20-301" src="assets/images/loginoneee.png" alt="" srcset="">
        <input type="password" id="rePassword"  autocomplete="new-password" placeholder="Confirm Possword"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor_" />
      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor_">
        <img class="w-20-301" src="assets/images/invite.png" alt="" srcset="">
        <input type="text" id="invite_code"  autocomplete="new-password" placeholder="Invitation Code"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor_" />
      </div>
      <div class="content-t-right-list-register-add commbackground fontFamilyColor col-center"
        id="registerBtn">Register</div>
      <div class="color_ textAlignCenter opc- registerLogin">Sign IN</div>


    </div>
  </div>
		</div>
		</div>

       
    
		</div>
		</div>
		 `
if (userInfo == null) {
  $(".htmlEasier").append(htmlEasierRegister)
  $(function () {
    $('#phone').on('input propertychange', function (e) {
      var text = $(this).val().replace(/[^\d]/g, "");
      $(this).val(text)
    })
  })
} else {
  $(".htmlEasier").append(htmlEasier)

}





var htmlFooter = `
<div class="footer-content-list">
<div class="footer-ttile color_ fontWeight400 paddingBottom">Stock Pluto</div>
<div class="fontSize16 color_8E paddingBottom8">
The Pluto Group is one of the world’s leading investment service， advisory and risk management solutions providers. </br>
The Group is headquartered in Lucky Plaza, Tsuen Wan, Hong Kong, China and serves clients through its offices in the United States, Europe and Asia.</br>
The company has a top independent investment research team. Through the U.S. stock big data, artificial intelligence quantitative analysis, it has more than 3,000 kinds of intelligent algorithms. Facing growing U.S. stock investors, the company has the ability to provide risk management, investment system management and financial advisory services. We truly make investing easier for individuals and serve over 2,000 individual investors in U.S. stocks each year. We are also well received by individual investors worldwide.
</div>
</div>
<div class="footer-content  ">
  
  <div class="footer-content w-8 displaySpaceAround">
  <div class="footer-content-list">
  <div class="footer-ttile color_ fontWeight400 paddingBottom">About Us</div>
  <div class="fontSize16 color_8E paddingBottom8"><a class='color_8E' href="index.html"> Home</a> </div>
  <div class="fontSize16 color_8E paddingBottom8"> <a class='color_8E' href="index.html#htmlCustomerStories"> Customer Stories</a></div>
  <div class="fontSize16 color_8E paddingBottom8"> <a class='color_8E' href="index.html#AboutUs"> About Us</a></div>
   
  <div class="fontSize16 color_8E agreement">Refund Agreement</div>
</div>
<div class="footer-content-list">
  <div class="footer-ttile color_ fontWeight400 paddingBottom">Contact Us</div>
  <div class="fontSize16 color_8E paddingBottom8">E-mail: stock.pluto@gmail.com </div>
  <div class="fontSize16 color_8E paddingBottom8"> Phone: 852 5518 5199 </div>
  <div class="fontSize16 color_8E"> Locations: Flat 1512-15/f lucky cir no165-171 wan chai rd wan chaihongkong</div>
</div>
</div>
</div>
<div class="footer-copy color_ fontWeight400">
  Copyright © 2022.Stock pluto All rights reserved.
</div>`

// $('.htmlBanners').append(htmlBanner);
$('.footer-ui').append(htmlFooter);

$(".loginStock").click(function () {
  if (userInfo == null) {
    window.location.href = `login.html`;
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
$(".loginOutStock").click(function () {
  localStorage.removeItem("plutoUserInfo");
  window.location.href = `login.html`;

});
function loginH(v) {
  localStorage.removeItem("plutoUserInfo");
  window.location.href = "login.html?params=" + v;
}

function getUrlParams(key) {
  var url = window.location.search.substr(1);
  console.log("----->",url)
  if (url === '') {
    return false;
  }
  var paramsArr = url.split('&');
  

  for (var i = 0; i < paramsArr.length; i++) {
    var combina = paramsArr[i].split("=");
     
    if (combina[0] == key) {
      console.log("--paramsArr--->",combina[1]  )
      return combina[1];
    }
  }
  console.log("----w->")

  return false;
}
//  console.log("getUrlParams",getUrlParams("idx"))

if (userInfo == null) {
  $(".loginStock").show();

} else {
  $(".loginStock").hide();
  $(".name-user").text('Welcome ' + userInfo.username)
}
$(".name-user").click(function () {
  if (userInfo == null) {
    loginH()
  } else {
    $(".name-user").text('Welcome ' + userInfo.username)

  }
})

$("#vip3").click(function () {

  window.location.href = "stockvane.html?idx=3";

});
$("#vip11").click(function () {

  window.location.href = "silvermembers.html?idx=10";

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




$(".login-out-style").click(() => {
  console.log("===99999999999=====>")
  localStorage.removeItem("plutoUserInfo");
  setTimeout(() => { toast('Sign out success') }, 1000)
  window.location.href = "login.html";
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
      let { total } = res.data
      let codes = res.code
      if (total > 0) {
        $(".periodData").append(period + total);
      }
      if (codes == 2) {
        localStorage.removeItem("plutoUserInfo");
        window.location.href = `login.html`;
        toast('Re login')

      }

    },
  });
}
function getOrderPrice(goods_code) {
  $.ajax({
    type: "get",
    url: `${baseUrl}/user/order/getprice?goods_id=${getUrlParams('idx')}&goods_code=${goods_code}`,
    dataType: "json",
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
    success: function (res) {
      if (res.code == 0) {
        var productDatas = res.data;
      var ls=  getUrlParams('idx')==7?'/Year' :'/Month';
        // nowprice oldprice save_num
        var opAll = `<span class="" ><span style="text-decoration: line-through"> $${productDatas.oldprice / 100}</span><span class="color_"> $${productDatas.nowprice / 100}</span></span>`;
        $(".priceData").append(opAll + ls);
      } else {
        toast(res.data);
        $(".priceData").text("")
      }


    },
  });
}

$(".goods_code").on('input', function (e) {
  goodsCode = $(".goods_code").val();
  if (goodsCode.length == advancedmembergoodsCode) {
    getOrderPrice(goodsCode)
  }

});


var isPayPal = true;
var timeOut = 2000;
function functionCreateStripe(goods_id) {

  var goodsCode = $(".goods_code").val() || "";

  if (isPayPal) {
    isPayPal = false;
    var val = $('input:radio[name="policy-input"]:checked').val();
    if (val == null) {
      // 什么也没选中 
      toast('Please agree to the service and privacy policy')
      return false;

    } else {
      $.ajax({
        type: "get",
        url: `${baseUrl}/user/order/createstripe?paytype=stripe&goods_id=${goods_id}&payway=0&goods_code=${goodsCode}`,
        dataType: "json",
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
        success: function (res) {
          if (res.code == 0) {
            const { pay_url } = res.data;
            window.location.href = pay_url;
          } else if (res.code == 2) {
            loginH("product")
          } else {
            toast(res.data)
          }
        }
      })


    }
  }
  setTimeout(() => {
    isPayPal = true
  }, timeOut);




}



 
// 统计代码 
var lists = [{ value: "USDT-Omni" }, { value: "USDT-ERC20" }, { value: "USDT-TRC20" }];
var listsValue = "USDT-Omni";
var list_ = ['3PzwwUa9p4vCqo29orV5SmnUWjNrnmRKop', '0x0d944757bb812f1F483Ca107A9BFBa8e1e86E77D', 'TYYcUfTVtbwFcJXcEiTgS37Z4TAkLnafto']
function get_() {
  $(".paypay span").text(list_[0])


  $.each(lists, function (index, data) {
    var op_to_pay_selected = `<option style="color:#FFF;background-color: black;" value="${data.value}">${data.value}</option>`;
    $("#to_pay_selected").append(op_to_pay_selected);
  });
}
get_()
$(".ais_right img").attr("src",'assets/images/omni/ommi.jpg')

$("#to_pay_selected").change(function () {
  var areaCodes_to_pay_selected = $("#to_pay_selected  option:selected").val();

  $.each(lists, function (index, data) {
    console.log("--============----->", areaCodes_to_pay_selected)
    if (data.value == areaCodes_to_pay_selected) {
      listsValue = areaCodes_to_pay_selected;
      if(areaCodes_to_pay_selected=='USDT-Omni'){
        $(".paypay span").text(list_[0])
        $(".ais_right img").attr("src",'assets/images/omni/ommi.jpg')
      }
      if(areaCodes_to_pay_selected=='USDT-ERC20'){
        $(".paypay span").text(list_[1])
        $(".ais_right img").attr("src",'assets/images/omni/ect20.jpg')

      }
      if(areaCodes_to_pay_selected=='USDT-TRC20'){
        $(".paypay span").text(list_[2])
        $(".ais_right img").attr("src",'assets/images/omni/TRC20.jpg')

      }
    }
  });
  // $("#codeInit").text(areaCode)
});
$("#copy_").click(()=>{
  copyText(listsValue)
})
function copyText(listsValue) {
  var text=list_[0]
  if (listsValue == 'USDT-Omni') {
    text = list_[0]
  }
  if (listsValue == 'USDT-ERC20') {
    text = list_[1]
  }
  if (listsValue == 'USDT-TRC20') {
    text = list_[2]
  }

  var oInput = document.createElement('input');

  oInput.value = text;

  document.body.appendChild(oInput);

  oInput.select();
  document.execCommand("Copy");

  oInput.className = 'oInput';

  oInput.style.display = 'none';
  toast("Success Copy")
}

// Omni:3PzwwUa9p4vCqo29orV5SmnUWjNrnmRKop
// TRC20:TYYcUfTVtbwFcJXcEiTgS37Z4TAkLnafto
// ERC20:0x0d944757bb812f1F483Ca107A9BFBa8e1e86E77D


!function (p) { "use strict"; !function (t) { var s = window, e = document, i = p, c = "".concat("https:" === e.location.protocol ? "https://" : "http://", "sdk.51.la/js-sdk-pro.min.js"), n = e.createElement("script"), r = e.getElementsByTagName("script")[0]; n.type = "text/javascript", n.setAttribute("charset", "UTF-8"), n.async = !0, n.src = c, n.id = "LA_COLLECT", i.d = n; var o = function () { s.LA.ids.push(i) }; s.LA ? s.LA.ids && o() : (s.LA = p, s.LA.ids = [], o()), r.parentNode.insertBefore(n, r) }() }({ id: "Jj9lqYbuaJWdfWUh", ck: "Jj9lqYbuaJWdfWUh" });




function createdOrderToXyongka(v) {
  var val = $('input:radio[name="policy-input"]:checked').val();
  if (val == null) {
    // 什么也没选中 
    toast('Please agree to the service and privacy policy')
    return;

  } else {
    var goodsCode = $(".goods_code").val() || "r_j_";
    window.location.href = `payment.html?goodId=${v}&goodsCode=${goodsCode}`


  }

}




// 协议模块


   

 

// $('.fixedTo').hide()
   function productAgreementService() { 
    var xieYiText  = `<div class="text-info">
    <iframe src="./tl_policy/policy3.html?idx=${getUrlParams('idx')}"   height="500px"/>
 </div>`
    $.sendConfirm({
      title: 'Product Agreement Service',
      desc: xieYiText,
      button: {
        confirm: 'I have read everything',
        cancel: '',
      },
      onConfirm: function() {
        console.log('点击确认！');
        // 去签名
        // handleClick()
         
      //  $('.fixedTo').show()

        $('body').append(`<div class="fixedTo">
        <div class="fixedToContent">
    
          <div id="signature" style="height: 100%;">
            
          </div>
          <div class="dibu">
        
            <div id="clear" class="reset">reset </div> 
            <div id="save" class="confirm">confirm </div>
          </div>
        </div>
      </div>`)
// 加载画布 start
      mui.plusReady(function () {
        plus.screen.lockOrientation('landscape-secondary');
      });
      $(document).ready(function () {
        $("#signature").jSignature({
          width: '100%',
          height: '100%',
          sizeRatio: 1,
          color: "#000",
          "background-color": "#fff",
          "decor-color": "rgba(0,0,0,0)", //这里将颜色设置为透明
          lineWidth: 1
        })
      });
      document.getElementById("clear").addEventListener('tap', function () {
        $("#signature").jSignature("reset");
        $("#pic")[0].innerHTML = '';
      });
      document.getElementById("save").addEventListener('tap', function () {
        if( $("#signature").jSignature('getData', 'native').length == 0){ 
          
          $.sendWarningToTop('Please sign your name', 2000, function() {
            // console.log('sendWarningToTop closed');
          });
          
          return; }
        var datapair = $("#signature").jSignature("getData", "image");


        var array = datapair.splice(",");
        console.log("64===>",'data:image/png;base64,'+array[1])
        var paytype = "offline";
         
         
        createdOrderToXieYi(paytype,array[1])
        $(".fixedTo").hide()
        $(".coin3_style").show()
           
      });

// 加载画布 end 

      },
    
      onClose: function() {
        console.log('点击关闭！');
      }
    });
  };
  
 

// paypal支付逻辑
function createdOrderToXieYi( paytype,v) { 
 var  goodsCode = $(".goods_code").val()||"";
 var showStartVip =getUrlParams('idx');
 
  
  $.ajax({
      type: "get",
      url: `${baseUrl}/user/order/create?paytype=${paytype}&goods_id=${getUrlParams('idx') || ''}&payway=${payway}&sign=${v}&goods_code=${goodsCode}`,
      dataType: "json",
      headers: {
          Authorization: `Bearer ${userInfo.token}`,
      },
      success: function (res) {
          if (res.code == 0) {
             
              if(showStartVip == 10 || showStartVip==11|| showStartVip==7){
       
              
          

             
            }else{
              window.location.href = res.data.pay_url;
            }
             
          } else  if(res.code == 2){
              loginH("product")
           }else{
              toast(res.data)
          }
         
      },
  });
 
}


// coins 

$('input:radio[name=policy-input]').change(function () {
 
  if (this.value == 'coin10' || this.value == 'coin11' || this.value == 'coin7') {
    productAgreementService()
  // $(".coin3_style").show()
  }
  
    
});

// 判断是不是http开头
function lookOrigin(v){
  
          var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
          var objExp=new RegExp(Expression);
                  console.log(objExp.test(v));
                  if(objExp.test(v))
                  {
                      return v;
                  }else{
                      return clineUrl  + v;
                  }
} 