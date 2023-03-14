 

Airwallex.init({
    env:AirwallexEVN, // Setup which Airwallex env('demo' | 'prod') to integrate with
    origin: window.location.origin, // Set up your event target to receive the browser events message
});


var tokens = JSON.parse(localStorage.getItem("ploutoUserInfo")) || "";

//  调用 Airwallex
function createAirwallex() {
    var goodsCode = $(".goods_code").val() || "";
    $.ajax({
        type: "post",
        url: `${baseUrl}/user/order/create`,
        data: {
            paytype: 'airwallex',
            goods_id: getUrlParams('idx'),
            payway: payway,
            goods_code: goodsCode
        },
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) { 
            handleAirwallex(res.data.airwallex_intent_id, res.data.airwallex_client_secret, res.data.airwallex_currency)

        },
    });
}
function handleAirwallex(intent_id, client_secret, currency) {


    Airwallex.redirectToCheckout({
        env: AirwallexEVN,// prod
        intent_id,
        client_secret,
        currency,
    });

}