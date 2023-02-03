var tokens = JSON.parse(localStorage.getItem("ploutoUserInfo")) || "";
var orderNo_id, userAgent_, client, billCountry = "US", billState_select_data = 'AL';

$('.billState_select').show()
$('.billState_input').hide()
function seleteCountry() {

    $.each(list_country, function (index, data) {
        var op_country = `<option style="color:#FFF;background-color: black;" value="${data.nickName}">${data.name}</option>`;
        $("#billCountry").append(op_country);
    });

}
seleteCountry()



$("#billCountry").change(function () {
    var area_ = $("#billCountry  option:selected").val();
    billCountry = area_;
    if (area_ === "US" || area_ == "CA") {
        handleCity(billCountry);
        $('.billState_select').show()
        $('.billState_input').hide()
    } else {
        $('.billState_select').hide()
        $('.billState_input').show()
    }


});

$(".billState_select").change(function () {
    var area_city = $(".billState_select  option:selected").val();
    billState_select_data = area_city
})

function handleCity() {
    if (billCountry == "US") { billState_select_data = 'AL' }
    if (billCountry == "CA") { billState_select_data = 'AB' }
    $(".billState_select").html("");

    $.each(list_country, function (index, data) {
        if (billCountry == data.nickName) {
            $.each(data.childrenList, function (index, datas) {

                for (var keys in datas) {
                    var op_country_ = `<option style="color:#FFF;background-color: black;" value="${datas[keys]}">${keys}</option>`;
                    $(".billState_select").append(op_country_);
                }


            });
        }

    });
}
if (billCountry == "US") {
    handleCity()
}



function pcOrWeb() {
    // 区分电脑 和 手机
    var system = {};
    system.pingtai = /(Win32|Win16|WinCE|Mac68K|MacIntel|MacIntel|MacPPC|Linux mips64)/i.test(navigator.platform);
    if (system.pingtai) {
        //电脑 
        client = "PC"
    } else {
        client = "WEB"
    }
}
pcOrWeb()
function getTotalMonly() {

    let goods_code = getUrlParams('goodsCode');
    let goods_id = getUrlParams('goodId');

    userAgent_ = getExploreName();
    $.ajax({
        type: "get",
        url: `${baseUrl}/user/order/getprice?paytype=eecpay&goods_id=${goods_id}&payway=1&goods_code=${goods_code != 'r_j_' ? goods_code : ""}`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            if (res.code == 0) {
                let { nowprice } = res.data;

                $(".monly_total span").text(memberList['name' + goods_id] + " $" + nowprice / 100)

                //  获取订单号
            } else if (res.code == 2) {
                loginH("product")
            } else {
                toast(res.data)
            }
        },
    });
}
getTotalMonly()

//  create order
function createdOrder(lists) {

    let goods_code = getUrlParams('goodsCode');
    let goods_id = getUrlParams('goodId');

    userAgent_ = getExploreName();
    $.ajax({
        type: "get",
        url: `${baseUrl}/user/order/create?paytype=eecpay&goods_id=${goods_id}&payway=1&goods_code=${goods_code != 'r_j_' ? goods_code : ""}`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            if (res.code == 0) {
                let { id } = res.data;
                lists.orderNo = id
                console.log("------->", lists)
                payMent(lists, id)
                // $(".monly_total span").text(memberList['name'+goods_id]+"$" + amount / 100)
                // orderNo_id = id;
                //  获取订单号
            } else if (res.code == 2) {
                loginH("product")
            } else {
                toast(res.data)
            }
        },
    });
}
// zhifu
var isPayPal = true;
$("#paymentNow").click(() => {
    var billFirstName = $.trim($("#billFirstName").val());
    var billLastName = $.trim($("#billLastName").val());
    var cardNo = $.trim($("#cardNo").val());
    var cardSecurityCode = $.trim($("#cardSecurityCode").val());
    var cardExpireMonth = $.trim($("#cardExpireMonth").val());
    var cardExpireYear = $.trim($("#cardExpireYear").val());
    var billAddress = $.trim($("#billAddress").val());
    var billCity = $.trim($("#billCity").val());
    if (billCountry == "US" || billCountry == "CA") {
        billState = billState_select_data;
    } else {
        billState = $.trim($(".billState_input").val());
    }

    // var billCountry = $.trim($("#billCountry").val());
    var billZip = $.trim($("#billZip").val());
    var billEmail = $.trim($("#billEmail").val());
    var billPhone = $.trim($("#billPhone").val());

    if (billFirstName == "") {
        toast('Please fill in your Card Holder First Name')

        return
    } else if (billLastName === "") {
        toast('Please fill in your Card Holder Last Name')
        return
    } else if (cardNo === "") {
        toast('Please fill in your Card Number')

        return
    } else if (cardSecurityCode === "" || cardSecurityCode.length != 3) {
        toast('Please fill in your Security code')

        return
    } else if (cardExpireMonth === "" || cardExpireMonth.length != 2) {
        toast('Please fill in your Month of Expire Date')

        return
    } else if (cardExpireYear === "" || cardExpireYear.length != 4) {
        toast('Please fill in your Year of Expire Date')

        return
    } else if (billAddress === "") {
        toast('Please fill in your Card Holder Address')

        return
    } else if (billCity === "") {
        toast('Please fill in your Card Holder City')

        return
    } else if (billState === "") {
        toast('Please fill in your Card Holder State')

        return
    } else if (billCountry === "") {
        toast('Please fill in your Card Holder Country')


        return
    } else if (billZip === "") {
        toast('Please fill in your Card Holder Zip')

        return
    } else if (billEmail === "") {
        toast('Please fill in your Card Holder Email')

        return
    } else if (billPhone === "") {
        toast('Please fill in your Bill Telephone')

        return
    }

    var emailRegExp=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(emailRegExp.test(billEmail))	{
      
    }else{
        toast('Please fill in your Card Holder Email')
        return
    }
    var lists = {
        orderNo: orderNo_id,//订单号
        billFirstName,//姓
        billLastName,//名
        cardNo,//卡号
        cardSecurityCode,//信用卡安全码
        cardExpireMonth,//有效月份
        cardExpireYear,//有效年份
        billAddress,//详细地址
        billCity,//城市
        billState,//省份/州
        billCountry,//国家 
        billZip,//邮编
        billEmail,//邮箱
        billPhone,//电话
        client,//WEB 或者 PC
        userAgent: userAgent_,//浏览器信息

    }
    console.log("=====>>>>", lists)
    if (isPayPal) {
        isPayPal = false;
        createdOrder(lists)

    }
    setTimeout(() => {
        isPayPal = true
    }, 5000);
})
function payMent(v) {


    $.ajax({
        type: "post",
        url: `${baseUrl}/noauth/eecpay`,
        dataType: "json",
        data: v,
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            let { redirectURL, orderSucceed, orderResult } = res.data;
            if (redirectURL) {
                window.location.href = redirectURL;
                return
            }
            if (orderSucceed == 0 || orderSucceed == -1) {
                window.location.href = `p_no.html?status=${orderSucceed}&orderResult=${orderSucceed == 0 ? orderResult : "10000"}`
            } else if (orderSucceed == 1) {
                window.location.href = `userTime.html`

            }

        }
    })
}


function getExploreName() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        return 'Opera';
    }
    else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
        return 'IE';
    }
    else if (userAgent.indexOf("Edge") > -1) {
        return 'Edge';
    }
    else if (userAgent.indexOf("Firefox") > -1) {
        return 'Firefox';
    }
    else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1) {
        return 'Safari';
    }
    else if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1) {
        return 'Chrome';
    }
    else if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return 'IE>=11';
    }
    else {
        return 'Unkonwn';
    }
}


function isEmail(strEmail) {
    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
        return true;
    } else {
        toast("Incorrect mailbox format");
        $("#billEmail").val() = ""

    }

}