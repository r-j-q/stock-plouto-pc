var userInfo = localStorage.getItem("ploutoUserInfo");
$("#loginStock").click(function () {
    if (userInfo == null) {
      window.location.href = "login.html";
    }
  });