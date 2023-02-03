
var tokens = JSON.parse(localStorage.getItem("ploutoUserInfo")) || "",
 page = 1,
 totals=0;
 
  get_page();
 
 

function get_page() {
    
    $.ajax({
        type: "get",
        url: `${baseUrl}/noauth/news?page=${page}`,
        dataType: "json",
        headers: {
            // Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            let { list } = res.data;
            totals = res.data.total;
            $(".ls").html("")
            $.each(list, function (index, data) {
                var s = getLocalTime(data.updatetime)
                var oip = `<a href="newDetail.html?list=${data.ID}"><div class="new_content_list">
                                <div class="new_content_img">
                                    <img src="${data.img}" alt="" srcset="">
                                </div>
                                <div class="new_content_r">
                                    <div class="new_content_title ellipsis1">
                                        ${data.title}
                                    </div>
                                    <div class="new_content_text ellipsis1">${data.intro}</div>
                                    <div class="new_content_time">${s} </div>
                                </div>
                            </div> </a>`
                $(".ls").append(oip);
                

            })
            
          

        },
    });
  
 
 
 
}
setTimeout(()=>{
    $("#pager").zPager({
        totalData: totals,
        htmlBox: $('#wraper'),
        btnShow: true,
        ajaxSetData: false
    }); 
},1000)
function getLocalTime(time) {
    var date = new Date(time);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
}
 
  
function currentPage(currentPage){
    // if( page != currentPage){
        page = currentPage
        get_page()
    // }
    //  
    /*
        触发页码数位置： Page/js/jquery.z-pager.js 64行
    */
    console.log("当前页码数：" + currentPage);
}
 
console.log("total---",totals)
 
    
 

