
var tokens = JSON.parse(localStorage.getItem("ploutoUserInfo")) || "";

let symbolData = getUrlParams("list");
console.log(symbolData);
(() => {
    $.ajax({
        type: "get",
        url: `${baseUrl}/noauth/news/detail?id=${symbolData}`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            let { detail } = res.data;
            console.log("000000",detail);
            // $.each(list, function (index, data) {

                // if (symbolData == index) {
                    // updatetime
                    var s = getLocalTime(detail.updatetime);
                    $(".detail_title_img").append("<img/>")
                    $(".detail_title0").text(detail.title);
                    $(".detail_title_").text(detail.intro);
                 var urls_img=  addhttp(detail.img)==true?detail.img:baseUrl+detail.img;
                    $(".detail_title_img img").attr('src', urls_img);
                    $(".detail_title_t").text(s);


                // }



            // })


        },
    });


})()
function getLocalTime(time) {
    var date = new Date(time*1000);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' '; 
    h = (date.getHours() + 1 < 10 ? '0' + (date.getHours() + 1) : date.getHours() + 1) + ':';
    m = (date.getMinutes() + 1 < 10 ? '0' + (date.getMinutes() + 1) : date.getMinutes() + 1) + ':';
    s = (date.getSeconds() + 1 < 10 ? '0' + (date.getSeconds() + 1) : date.getSeconds() + 1);

    return Y + M + D + h + m + s;
}
function addhttp(urls) {
  var s =/(http|https):\/\/\S*/;
  
    return s.test(urls)
 }
 console.log(addhttp('ht://financialmodelin'))






