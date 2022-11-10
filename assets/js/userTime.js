var producId = 3;
var tokens = JSON.parse(localStorage.getItem("plutoUserInfo")) || "";

var count = 0;//当前选择的支付方式，0=stripe，1=paypal

var dateNowtime = "",
    enTime1 = "0",
    enTime2 = "0",
    vip_end = "0",
    enTime3 = "0";


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
        // 2030/02/22 23:45:24
        if (res.code == 0) {
            dateNowtime = res.data.nowtime;
            // console.log("res.data.sm_vip_end.substr(0,3)", res.data.vip_club_end.substr(0, 3))
            enTime1 = res.data.sm_vip_end.substr(0, 3) == "000" ? "0" : transformTimestamp(res.data.sm_vip_end);
            enTime2 = res.data.vip_club_end.substr(0, 3) == "000" ? "0" : transformTimestamp(res.data.vip_club_end);
            enTime3 = res.data.star_vip_end.substr(0, 3) == "000" ? "0" : transformTimestamp(res.data.star_vip_end);
            vip_end = res.data.vip_end_str.substr(0, 3) == "000" ? "0" : transformTimestamp(res.data.vip_end_str);

            $(".name-data").text("Name: " + res.data.username || "")
            $(".email-data").text("Email: " + res.data.email || "")
            $(".phone-data").text("Phone: " + res.data.phone || "")

               

            $(".disUserProut").append(htmlTimeTest(1, 'stock vane', enTime1 == 0 ? '0' : enTime1 ))
            $(".disUserProut").append(htmlTimeTest(2, 'Vip club', enTime2 == 0 ? '0' : enTime2 ))
            $(".disUserProut").append(htmlTimeTest(3, 'Star vip', enTime3 == 0 ? '0' : enTime3 ))
            $(".disUserProut").append(htmlTimeTest(4, 'Stock pluto', vip_end == 0 ? '0' : vip_end))
            // $(".disUserProut").append(htmlTime(1, 'stock vane', enTime1 == 0 ? '0' : enTime1.replaceAll('-', '/')))
            // $(".disUserProut").append(htmlTime(2, 'Vip club', enTime2 == 0 ? '0' : enTime2.replaceAll('-', '/')))
            // $(".disUserProut").append(htmlTime(3, 'Star vip', enTime3 == 0 ? '0' : enTime3.replaceAll('-', '/')))
            // $(".disUserProut").append(htmlTime(4, 'Stock pluto', vip_end == 0 ? '0' : vip_end.replaceAll('-', '/')))
           

            //日期倒计时,现在距离下面的日期
            var data_show = $('.data-box');
            for (var i = 1; i <= data_show.length; i++) {
                if($("#dateShow" + i).data("date")==0){
                 $("#dateShow"+i).html('<span class="fontSize24 date-tiem d">0</span>')
                }else{
                    function_name($("#dateShow" + i).data("date"), "#dateShow" + i);
                }
               
            }
            console.log('$("#dateShow" + i).data("date")',$("#dateShow2").data("date"))
            // function_name('2018/02/20 21:43:55','.data-show-box');
            function function_name(time, obj) {
                $.leftTime(time, function (d) {
                    if (d.status) {
                        
                        var $dateShow1 = $(obj);
                        $dateShow1.find(".d").html(d.d);
                        $dateShow1.find(".h").html(d.h);
                        $dateShow1.find(".m").html(d.m);
                        $dateShow1.find(".s").html(d.s);
                    }
                });
            }


        }
    },
});


function htmlTimeTest(n, name, v) {
    
    // console.log("vvvvvvvvvvvv",n)

 
var t = `<div class="userProut back30">
<div class="color_ fontSize24 fontWeightAll">${name}</div>
<img class="shijianTime m-top-time-20" src="assets/images/shizhong.png" alt="" srcset="">
<div class="color_8E m-top-time-20 fontSize16">Expiration date:</div>
<div class="color_ m-top-time-20 fontSize12"> 
<div class="data-box" >
${v}  Days left
</div>

</div>
</div>`

return t;
}



function htmlTime(n, name, v) {
    
        // console.log("vvvvvvvvvvvv",n)
  
    
    var t = `<div class="userProut back30">
    <div class="color_ fontSize24 fontWeightAll">${name}</div>
    <img class="shijianTime m-top-time-20" src="assets/images/shizhong.png" alt="" srcset="">
    <div class="color_8E m-top-time-20 fontSize16">Expiration date:</div>
    <div class="color_ m-top-time-20 fontSize16"> 
    <div class="data-box" id="dateShow${n}" data-date="${v}">
    <span class="date-tiem d">00</span>Day
    <span class="date-tiem h">00</span>:
    <span class="date-tiem m">00</span>:
    <span class="date-s s">00</span>Days left
</div>
   
    </div>
   </div>`

    return t;
}
function transformTimestamp(timestamp) {
    let a = new Date(timestamp).getTime();
    const date = new Date(a);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '  ';
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()); // 秒
    const dateString = Y + M + D + h + m + s;
    // "2050/02/22 23:45:24"
    console.log('dateString', dateString); // > dateString 2021-07-06 14:23
    return dateString;
}



