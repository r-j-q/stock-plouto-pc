
var tokens = JSON.parse(localStorage.getItem("plutoUserInfo")) || "";
 

(() => {
    func_page()


})()
function func_page (){
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

               var s =getLocalTime(data.updatetime)
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

            })


        },
    });
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





