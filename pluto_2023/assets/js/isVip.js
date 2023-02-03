var tokens = JSON.parse(localStorage.getItem("ploutoUserInfo")) || "";
$("#ImgHtml").hide()
$("#videoHtml").hide() 


function isVip() {

    $.ajax({
        type: "get",
        url: `${baseUrl}/user/product/getlist?is_end=0&type_id=1`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) { 
        // var res={
        //     data:{
        //         status:false
        //     }
        // }
         const {status} =  res.data;
        //  videoHeight videoHtml ImgHtml 
         if(status){
            // $("#videoHeight").css({
            //     height:"300px"
            // })
            // $("#videoHtml").show()
            // $("#ImgHtml").hide()
            // console.log("=======>true")
         }else{
            // $("#videoHeight").css({
            //     height:"448px"
            // })
            // $("#videoHtml").hide()
            // $("#ImgHtml").show()
            console.log("=======>false")

         }
         

        },
    });
}
isVip()