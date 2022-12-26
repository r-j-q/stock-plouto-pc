
var tokens = JSON.parse(localStorage.getItem("plutoUserInfo")) || "";


(() => {
    $.ajax({
        type: "get",
        url: `${baseUrl}/noauth/stock/news`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            let { list } = res.data;
            console.log("=====list=======>",list);
            $.each(list, function (index, data) {
                var s=(data.updatedAt.substring(0,19)).replace("T",' ');
                
                var oip = `<a href="newDetail.html?list=${index}"><div class="new_content_list">
        <div class="new_content_img">
            <img src="https://financialmodelingprep.com${data.image}" alt="" srcset="">
        </div>
        <div class="new_content_r">
            <div class="new_content_title ellipsis1">
                 ${data.title}
            </div>
            <div class="new_content_text ellipsis1">${data.text}</div>
            <div class="new_content_time">${s} </div>
        </div>
     </div> </a>`
                $(".new_content").append(oip);

            })


        },
    });


})()







