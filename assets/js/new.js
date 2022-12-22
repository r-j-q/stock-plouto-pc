
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
            $.each(list, function (index, data) {


                var oip = `<div class="timeline-row active">

				<div class="timeline-time">

					<small style="color:#333">Oct 16</small>${data.publishedDate}

				</div>

				<div class="timeline-icon">

					<div class="bg-info">

						<i class="fa fa-camera"></i>

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
                $(".timeline").append(oip);

                //             var s = JSON.stringify(data)
                //             var oip = `<a href="newDetail.html?list=${index}"><div class="new_content_list">
                //     <div class="new_content_img">
                //         <img src="${data.image}" alt="" srcset="">
                //     </div>
                //     <div class="new_content_r">
                //         <div class="new_content_title ellipsis1">
                //              ${data.title}
                //         </div>
                //         <div class="new_content_text ellipsis1">${data.text}</div>
                //         <div class="new_content_time">${data.publishedDate} </div>
                //     </div>
                //  </div> </a>`
                //             $(".timeline").append(oip);

            })


        },
    });


})()







