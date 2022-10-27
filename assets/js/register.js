
localStorage.removeItem("plutoUserInfo");

var areaCode = "";
var codeLists = [];
$.ajax({
    type: "get",
    url: `${baseUrl}/noauth/getareacode`,
    dataType: "json",
    success: function (res) {
        codeLists = res.data.list; 
        areaCode = "001";
        $("#codeInit").text(areaCode)

        codeLists.unshift(...codeLists.splice(codeLists.findIndex(i => i.title==="U.S"), 1));
        $.each(res.data.list, function (index, data) {
            var op21 = `<option style="color:#FFF;background-color: black;" value="${data.value}">${data.title}</option>`;
            $("#s1").append(op21);
        });
    },
});

$("#s1").change(function () {
    var areaCodes = $("#s1  option:selected").text();
    $.each(codeLists, function (index, data) {
        if (data.title == areaCodes) {
            areaCode = data.value;
        }
    });
    $("#codeInit").text(areaCode)
});

$("#registerBtn").click(function () {
    var registerUser = {
        username: $("#username").val(),
        password: $("#password").val(),
        rePassword: $("#rePassword").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        code: $("#code").val(),
        invite_code: $("#invite_code").val(),
        areacode: areaCode,
    };
    if ($("#username").val() == "") {
        toast('Username can not be empty')
        return;
    }
    if ($("#phone").val() == "") {
        toast('Enter phone number')

        return;
    }
    if ($("#email").val() == "") {
        toast('Enter email')

        return;
    }

    if ($("#code").val() == "") {
        toast('please enter verification code')

        return;
    }
    if ($("#password").val() == "") {
        toast('Please enter the verification password')

        return;
    }
    if ($("#rePassword").val() == "") {
        toast('Confirm password is incorrect')

        return;
    }
    if ($("#password").val() != $("#rePassword").val()) {
        toast('Please check that the password is always')

        return;
    }
    var emailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var ok = emailRegExp.test($("#email").val());

    if (ok) {
    } else {
        // 输入的格式不符合要求
        toast('Error email')
        return;
    }

    // console.log("注册参数2", registerUser);
    $.ajax({
        type: "post",
        url: `${baseUrl}/auth/register`,
        data: registerUser,
        dataType: "json",
        success: function (res) {
            if (res.code == 0) {
                window.location.href = "login.html?register=register";
            } else {
                toast(res.msg)

            }
        },
    });
});
$(".registerLogin").click(function () {
    window.location.href = "login.html?register=register";
});
 
$(".btn_yzmbutton").click(function () {
    var obj = $(".btn_yzmbutton");
    getCodes(obj);
    countdown(obj);
});
function countdown(obj) {
    if (time == 0) {
        obj.attr("disabled", false);
        obj.html("Get Code");
        time = 60;
        return;
    } else {
        obj.attr("disabled", true);
        obj.html(time + "s");
        time--;
    }
    setTimeout(function () {
        countdown(obj);
    }, 1000);
}
var time = 60;
function getCodes(obj) {
    var phones = $("#phone").val();
    if (phones == "") {
        obj.attr("disabled", false);
        obj.html("Get Code");
        toast('Telephone error')

        return;
    }
    $.ajax({
        type: "get",
        url: `${baseUrl}/noauth/getcode?phone=${phones}&areacode=${areaCode}`,
        dataType: "json",
        success: function (res) { },
    });
}