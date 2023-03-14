
var tokens = JSON.parse(localStorage.getItem("ploutoUserInfo")) || "";
const rightContent = `Alarm.com Holdings, Inc. (NASDAQ:ALRM ) Q4 2022 Earnings Conference Call February 23, 2023 4:30 PM ET Company Participants Matthew Zartman - VP, Strategic Communications & IR Stephen Trundle - CEO & Director Steve Valenzuela - CFO & Principal Accounting Officer Conference Call Participants Adam Tindle - Raymond James & Associates Darren Aftahi - ROTH MKM Partners Brian Ruttenbur - Imperial Capital Jack Aarde - Maxim Group Aditya Dagaonkar - Northland Capital Markets Operator Good day, and thank you for standing by, and welcome to the Alarm.com Fourth Quarter 2022 Earnings Conference Call. [Operator Instructions].`
const rightImage = `https://cdn.snapi.dev/images/v1/q/b/transcript12-1769289.jpg`
const rightTitle = `Alarm.com Holdings, Inc. (ALRM) Q4 2022 Earnings Call Transcript`
    // (() => {
        // 长
        // $.ajax({
        //     type: "get",
        //     url: `${baseUrl}/noauth/stock/news`,
        //     dataType: "json",
        //     headers: {
        //         Authorization: `Bearer ${tokens.token}`,
        //     },
        //     success: function (res) {
        //         let { list } = res.data;
        //         $.each(list, function (index, data) {

        //             if (index < 1) {

        // function getRight(){ 
        var oip = `<div class="timeline-row active">

				<div class="timeline-time" style="color:#333">

					<small style="color:#333">Oct 16</small>2023/01/03

				</div>

				<div class="timeline-icon">

					<div class="bg-info"> 

					</div>

				</div>

				<div class="panel timeline-content">

					<div class="panel-body">

						<h2>

							 ${rightTitle}

						</h2><img class="img-responsive" src="${rightImage}"><p>

                        ${rightContent}

						</p>

					</div>

				</div>

			</div>`
        // }
        $(".timeline").append(oip);
    // }
    // getRight()
        //     })


        // },
    // });

// 短
$.ajax({
    type: "get",
    url: `${baseUrl}/noauth/news?pagesize=3`,
    dataType: "json",
    headers: {
        Authorization: `Bearer ${tokens.token}`,
    },
    success: function (res) {
        let { list } = res.data;
        console.log("=====noauth news=======>", list);
        $.each(list, function (index, data) {


            var s = getLocalTime(data.updatetime)
            var sk = lookOrigin(data.img)
            var oip = `<a  target="_blank"  href="newDetail.html?list=${data.ID}"><div class="new_content_list">
                                <div class="new_content_img">
                                <img src="${sk}" alt="" srcset="">
                                </div>
                                <div class="new_content_r">
                                    <div class="new_content_title    ellipsis1 color_8E">
                                        ${data.title}
                                    </div>
                                    <div class="new_content_text   line__2 color_8E">${data.intro}</div>
                                    <div class="new_content_time color_8E">${s} </div>
                                </div>
                            </div> </a>`

            $(".timelineLeft").append(oip);

        })


    },
});


    // }) ()

function lookOrigin(v) {
    //查看原文
    var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp = new RegExp(Expression);
    console.log(objExp.test(v));
    if (objExp.test(v)) {
        return v;
    } else {
        return baseUrl + v;
    }
}
function getLocalTime(time) {
    var date = new Date(time * 1000);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = (date.getSeconds() + 1 < 10 ? '0' + (date.getSeconds() + 1) : date.getSeconds() + 1);
    return Y + M + D + h + m + s;
}

// // noauth/news  数据少





