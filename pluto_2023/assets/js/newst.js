
var tokens = JSON.parse(localStorage.getItem("plutoUserInfo")) || "";


(() => {
    // 长
    $.ajax({
        type: "get",
        url: `${baseUrl}/noauth/stock/news`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            let { list } = res.data;
            $.each(list, function (index, data) {

                if (index < 6) {
                    var oip = `<div class="timeline-row active">

				<div class="timeline-time" style="color:#333">

					<small style="color:#333">Oct 16</small>${data.publishedDate}

				</div>

				<div class="timeline-icon">

					<div class="bg-info">

						// <i class="fa fa-camera"></i>

					</div>

				</div>

				<div class="panel timeline-content">

					<div class="panel-body">

						<h2>

							 ${data.title}

						</h2>

						<img class="img-responsive" src="${data.image}">

						<p>

                        ${data.text}

						</p>

					</div>

				</div>

			</div>`
                }
                $(".timeline").append(oip);

            })


        },
    });

    // 短
    $.ajax({
        type: "get",
        url: `${baseUrl}/noauth/news`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            let { list } = res.data;
            console.log("=====noauth news=======>", list);
            $.each(list, function (index, data) {
                if (index < 18) {
                    // var s=(data.updatedAt.substring(0,19)).replace("T",' ');

                    var s = getLocalTime(data.updatetime)
                    console.log("=====noauth news=======>", s);



                    var sk= lookOrigin(data.img)
                var oip = `<a href="newDetail.html?list=${data.ID}"><div class="new_content_list">
                                <div class="new_content_img">
                                <img src="${sk}" alt="" srcset="">
                                </div>
                                <div class="new_content_r">
                                    <div class="new_content_title ellipsis1">
                                        ${data.title}
                                    </div>
                                    <div class="new_content_text   line__2">${data.intro}</div>
                                    <div class="new_content_time">${s} </div>
                                </div>
                            </div> </a>`
                }
                $(".timelineLeft").append(oip);

            })


        },
    });


})()

function lookOrigin(v){
    //查看原文
            var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
            var objExp=new RegExp(Expression);
                    console.log(objExp.test(v));
                    if(objExp.test(v))
                    {
                        return v;
                    }else{
                        return baseUrl + v;
                    }
} 
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

// // noauth/news  数据少





