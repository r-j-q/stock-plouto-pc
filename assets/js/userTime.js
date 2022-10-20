var producId = 3;
var tokens = JSON.parse(localStorage.getItem("ploutoUserInfo")) || "";
const stripe = Stripe(stripeKey);
const items = [{ id: "prod_LxQP3nkuvcykMZ" }];
var count = 0;//当前选择的支付方式，0=stripe，1=paypal

var dateNowtime = "",
    enTime1 = "0",
    enTime2 = "0",
    vip_end = "0",
    enTime3 = "0";
// var data_show = $('.data-box');
// for(var i=1;i<=data_show.length;i++){
//     function_name($("#dateShow"+i).data("date"),"#dateShow"+i);
// }
$.ajax({
    type: "get",
    url: `${baseUrl}//user/user/index`,
    dataType: "json",
    headers: {
        Authorization: `Bearer ${tokens.token}`,
    },
    success: function (res) {

        console.log("倒计时", res)
        if (res.code == 2) {
            window.location.href = "login.html";
            toast(res.data)

            return
        }
        if (res.code == 0) {
            dateNowtime = res.data.nowtime;
            console.log("res.data.sm_vip_end.substr(0,3)", res.data.vip_club_end.substr(0, 3))
            enTime1 = res.data.sm_vip_end.substr(0, 3) == "000" ? "0" : transformTimestamp(res.data.sm_vip_end);
            enTime2 = res.data.vip_club_end.substr(0, 3) == "000" ? "0" : transformTimestamp(res.data.vip_club_end);
            enTime3 = res.data.star_vip_end.substr(0, 3) == "000" ? "0" : transformTimestamp(res.data.star_vip_end);
            vip_end = res.data.vip_end.substr(0, 3) == "000" ? "0" : transformTimestamp(res.data.vip_end);

            // Vip club:	<h1 class="ig2"></h1>
            // Star vip:	<h1 class="ig3"></h1>
            // Signals:	<h1 class="ig4"></h1>
          $(".name-data").text("Name: "+ res.data.username || "")
          $(".email-data").text("Email: "+res.data.email || "")
          $(".phone-data").text("Phone: "+res.data.phone || "")
           
            if (enTime1 != 0) {

                $(".tt").append(`<div class='    rrrrr'>  "stock vane" expiration date:	<div class="ig1">${enTime1}</div></div>`)

            }
            if (enTime2 != 0) {

                $(".tt").append(`<div class='    rrrrr'> " Vip club" expiration date:	<div class="ig1">${enTime2}</div></div>`)

            }
            if (enTime3 != 0) {

                $(".tt").append(` <div class='    rrrrr'>  "Star vip" expiration date:	<div class="ig1">${enTime3}</div></div>`)

            }
            if (vip_end != 0) {

                $(".tt").append(`<div class='    rrrrr'>  "Stock plouto" expiration date:	<div class="ig1">${vip_end}</div></div>`)

            }
            // if(enTime2 != 0){
            //     $(".ig2").text(enTime2)
            // }
            // if(enTime2 != 0){
            //     $(".ig3").text(enTime3)
            // }
            // if(enTime2 != 0){
            //     $(".ig4").text(vip_end)
            // }


        }
    },
});

function transformTimestamp(timestamp) {
    let a = new Date(timestamp).getTime();
    const date = new Date(a);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '  ';
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()); // 秒
    const dateString = Y + M + D ;
    // console.log('dateString', dateString); // > dateString 2021-07-06 14:23
    return dateString;
}

//   var t1 =transformTimestamp(enTime1)
//   var t2 =transformTimestamp(enTime2)
//   var t3 =transformTimestamp(enTime3)


