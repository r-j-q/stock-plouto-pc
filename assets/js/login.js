var userInfo =JSON.parse(  localStorage.getItem("ploutoUserInfo"));
$("#ResetPassword").click(function () {
  window.location.href = "changePassword.html";
});
$("#loginBtn").click(function () {

  if ($("#username").val() == "") {
    toast('Username can not be empty')

    return;
  }
  if ($("#password").val() == "") {
    toast('Please enter the verification password')

    return;
  }
  var user = {
    username: $("#username").val(),
    password: $("#password").val(),
  };

  $.ajax({
    type: "post",
    url: `${baseUrl}/auth/login`,
    data: user,
    dataType: "json",
    success: function (res) {
      if (res.code == 1) { 
        toast(res.msg)

      } else {
        var data = JSON.stringify(res.data);
        localStorage.setItem("ploutoUserInfo", data || null);
        // location.reload()
        // window.history.back()
        if (getUrlParams("register") == "register") {
          window.location.href = "index.html";
   
        } else {
          history.go(-1);
          // window.history.back()
        }

      }
    },
  });
});

$("#ploutoRegister").click(function () {
  
    window.location.href = "register.html";
 
});
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
