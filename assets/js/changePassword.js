var userInfo =JSON.parse(  localStorage.getItem("ploutoUserInfo"));
var _tempPosition = "center";
var areaCode = "";
var codeLists = [];
$.ajax({
    type: "get",
    url: `${baseUrl}/noauth/getareacode`,
    dataType: "json",
    success: function (res) {
        codeLists = res.data.list;
        console.log("======>", res);
        areaCode = "001";
        $("#codeInit").text(areaCode)

        codeLists.unshift(...codeLists.splice(codeLists.findIndex(i => i.title==="U.S"), 1));
        $.each(res.data.list, function (index, data) {
            var op21 = `<option style="color:#FFF;background-color: black;" value="${data.value}">${data.title}</option>`;
            $("#s1").append(op21);
        });
        // window.location.href = "login.html";
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
$(".btn_yzmbutton").click(function () {
    var obj = $(".btn_yzmbutton");
    getCodes(obj);
    countdown(obj);
});
$("#registerBtn").click(function () {
    var registerUser = {
        phone: $("#phone").val(),
        code: $("#code").val(),
        passwd: $("#passwd").val()
    };

    if ($("#phone").val() == "") {
        toast('Enter phone number')

        return;
    }
    if ($("#code").val() == "") {
        toast('please enter verification code')

        return;
    }
    if ($("#passwd").val() == "") {
        toast('Please enter the verification password')

        return;
    }
    $.ajax({
        type: "get",
        url: `${baseUrl}/noauth/pwd?phone=${registerUser.phone}&smscode=${registerUser.code}&passward=${registerUser.passwd}`,
        dataType: "json",
        success: function (res) {
            if (res.code == 0) {
                window.location.href = "login.html";
            } else {
                toast(res.msg)

            }

        },
    });
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
        success: function (res) {
            codeLists = res.data.list;
            console.log("======>", res);
            areaCode = res.data.list[0].value;
            $("#codeInit").text(areaCode)
            $.each(res.data.list, function (index, data) {
                var op21 = `<option style="color:#FFF;background-color: black;" value="${data.value}">${data.title}</option>`;
                $("#s1").append(op21);
            });
        },
    });
}
