 
var tokens = JSON.parse(localStorage.getItem("plutoUserInfo")) || "";

 let symbolData =getUrlParams("list") ; 
 console.log(symbolData);
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
                 if(symbolData==index){
                 
                    $(".detail_title0").text(data.title);
                    $(".detail_title_").text(data.text); 
                    $(".detail_title_img img").attr('src',data.image);  
                    $(".detail_title_t").text(data.publishedDate); 

                     
                 }
              
              

            })


        },
    });


})()







