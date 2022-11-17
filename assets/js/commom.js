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
                                    <li><a href="silvermembers.html">Vip Club</a></li> 
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">Service</a>
                                <ul>
                                    <li><a href="stockVaneService.html">Stock vane</a></li>
                                    <li><a href="SignalsService.html"> Signals</a></li>
                                </ul>
                            </li>
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
                                    <li><a href="silvermembers.html">Vip Club</a></li> 
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">Service</a>
                                <ul>
                                    <li><a href="stockVaneService.html">Stock vane</a></li>
                                    <li><a href="SignalsService.html"> Signals</a></li>
                                </ul>
                            </li>
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
      <div class="content-t-right-list-register-add loginbackgroundColor">
        <img class="w-20-301" src="assets/images/name-style.png" alt="" srcset="">
        <input type="text" id="username"   autocomplete="new-password" placeholder="Name"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor" />


      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor">

        <img class="w-20-301" src="assets/images/email.png" alt="" srcset="">
        <input type="text" id="email" placeholder="Enter Emial" autocomplete="new-password"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor" />


      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor">
        <img class="w-20-301" src="assets/images/loginone.png" alt="" srcset="">
        <div class="col-center-login">
          <select name="" id="s1"  autocomplete="new-password" class="form-control-select color_f loginbackgroundColor">
          </select>
          <span id="codeInit" class="color_f fontWeight400 fontSize16 border-right-2">009</span>
        </div>
        <input    id="phone"  autocomplete="new-password"  placeholder="Telephone" style="width:100%"
          
          onafterpaste="this.value=this.value.replace(/[^\d]/g,'') "
          class="form-control1 color_f  loginbackgroundColor fontSize16" />
      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor">

        <img class="w-20-301" src="assets/images/loginones.png" alt="" srcset="">
        <input type="text" id="code"  autocomplete="new-password" placeholder="Code"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor" style="width: 100%;"/>
        <button class="btn_yzmbutton">
        verification code
        </button>

      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor">

        <img class="w-20-301" src="assets/images/loginoneee.png" alt="" srcset="">
        <input id="password" placeholder="Create Password"  autocomplete="new-password" type="password"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor" />


      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor">

        <img class="w-20-301" src="assets/images/loginoneee.png" alt="" srcset="">
        <input type="password" id="rePassword"  autocomplete="new-password" placeholder="Confirm Possword"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor" />
      </div>
      <div class="content-t-right-list-register-add loginbackgroundColor">
        <img class="w-20-301" src="assets/images/invite.png" alt="" srcset="">
        <input type="text" id="invite_code"  autocomplete="new-password" placeholder="Invitation Code"
          class="form-control1 color_f  fontSize16 margin-left-10 loginbackgroundColor" />
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
    }else{
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
  console.log("loginStock  =========")
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
      if (total > 0) {
        $(".periodData").append(period + total);
      }

    },
  });
}


// 统计代码
!function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '964717900866399');
fbq('track', 'PageView');