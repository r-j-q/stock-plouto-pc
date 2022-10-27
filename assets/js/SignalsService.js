var producId = 7;
var tokens = JSON.parse(localStorage.getItem("plutoUserInfo")) || "";
const stripe = Stripe(stripeKey);
const items = [{ id: "prod_LxQP3nkuvcykMZ" }];
var count = 0;//当前选择的支付方式，0=stripe，1=paypal
localStorage.setItem("fileNameTo",(location.href.split("/").slice(-1))[0])

$(".buyNowProduct").click(() => {
    if (tokens) {
        $(".product-pay").toggle()
    } else {
        loginH('product')

    }

})


function forPayList() {
    $(".product-pay-stripe-paypal").html("")
    $.each(arrList, function (index, data) {
        var oip = `<div class="product-pay-stripe fontWeightAll fontSize24 color_8E payType_ ${count == index ? 'active' : ''}" onclick="handleClick(${index})" >${data}</div>`;

        $(".product-pay-stripe-paypal").append(oip);
    })
}

function handleClick(e) {
    count = e;
    if (count == 0) {
        $('#pay-stripe').hide();
        $('#confirmPaymentType').show()
    } else {
        $('#pay-stripe').show();
        $('#confirmPaymentType').hide()
       
    }



    forPayList()
}
forPayList();

// 获取产品列表

function goodList(id) {
    if (tokens.token) {
        $(".buyNowProduct").hide();
        $(".product-pay").show();


    } else {
        $(".buyNowProduct").show();
        $(".product-pay").hide();
    }

    if (count == 0) {
       
        $('#confirmPaymentType').show()
        $('#pay-stripe').hide();

    } else {
        $('#pay-stripe').show();
        $('#confirmPaymentType').hide()
       

    }

    $.ajax({
        type: "get",
        url: `${baseUrl}/noauth/goodsinfo?goods_id=${id}`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            productData = res.data;
            if (id == producId) {
                var op1 = `<span class="fontSize42">$${productData.cur_price / 100}</span>`;
                $("#pay01").append(op1);


            }
        }
    })
}
goodList(producId);


// 购买

// function toPay(){
//     var paytype = "paypal"; 
//     createdOrderTo(goods_id, paytype);
// }
var isPayPal = true;
$("#confirmPaymentType").click(() => {
    if (isPayPal) {
        isPayPal = false;
        var val = $('input:radio[name="policy-input"]:checked').val();
        if (val == null) {
            // 什么也没选中 
            toast('Please agree to the service and privacy policy')
            return false;

        } else {
            if (count == 0) {
                var paytype = "paypal";
                createdOrderTo(productData.ID, paytype);
            }


        }
    }
    setTimeout(() => {
        isPayPal = true
    }, timeOut);
})
// paypal支付逻辑
function createdOrderTo(goods_id, paytype) {

    $.ajax({
        type: "get",
        url: `${baseUrl}/user/order/create?paytype=${paytype}&goods_id=${goods_id}&payway=1`,
        dataType: "json",
        headers: {
            Authorization: `Bearer ${tokens.token}`,
        },
        success: function (res) {
            if (res.code == 0) {
                window.location.href = res.data.pay_url;
            } else {
                loginH("product")
            }
        },
    });
}




// stripe 支付模块


let elements;

async function initialize(goods_id) {
    const response = await fetch(`${baseUrl}/user/order/create?paytype=stripe&goods_id=${goods_id}&payway=0`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens.token}`,

        },
    })
    const { clientSecret } = await response.json();

    const appearance = {
        theme: 'stripe',
    };
    console.log("====>", clientSecret)
    elements = stripe.elements({ appearance, clientSecret });

    const paymentElement = elements.create("payment");
    paymentElement.mount("#payment-element");
}

async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: `${baseUrl}/pay/callbackstripe`,
        },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
    } else {
        showMessage("An unexpected error occurred.");
    }

    setLoading(false);
}

async function checkStatus() {
    const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
    );

    if (!clientSecret) {
        return;
    }

    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

    switch (paymentIntent.status) {
        case "succeeded":
            showMessage("Payment succeeded!");
            break;
        case "processing":
            showMessage("Your payment is processing.");
            break;
        case "requires_payment_method":
            showMessage("Your payment was not successful, please try again.");
            break;
        default:
            showMessage("Something went wrong.");
            break;
    }
}


function showMessage(messageText) {
    const messageContainer = document.querySelector("#payment-message");

    messageContainer.classList.remove("hidden");
    messageContainer.textContent = messageText;

    setTimeout(function () {
        messageContainer.classList.add("hidden");
        messageText.textContent = "";
    }, 4000);
}

function setLoading(isLoading) {
    if (isLoading) {
        document.querySelector("#submit").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        document.querySelector("#submit").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
    }
}

let isClick = true;
$(document).on("click", "#pay-stripe", function () {
    if (isClick) {
        isClick = false;

        var val = $('input:radio[name="policy-input"]:checked').val();
        if (val == null) {
            toast('Please agree to the service and privacy policy')
            return false;

        } else {
            document.getElementById("pay-stripe").style.width = "100%";

            $("#submit").addClass("m-top-20-")
            $("#button-text").addClass("button-style");
            $(".buy-now-btn").css({
                "height": "auto",
                "line-height": "auto"
            });
            $("#payment-form").css({
                "padding": "10px"
            })
            initialize(productData.ID)
            checkStatus();
            document
                .querySelector("#payment-form")
                .addEventListener("submit", handleSubmit);

        }

    } else {
        // console.log("=isClick=222==========>", isClick)

    }

});

setTimeout(() => {
    isClick = true;
}, timeOut)


// 月季年数据
// 1短  2长

$.ajax({
    type: "get",
    url: `${baseUrl}/user/product/getlist?is_end=0&type_id=1`,
    dataType: "json",
    headers: {
        Authorization: `Bearer ${tokens.token}`,
    },
    success: function (res) {
        let {   status } = res.data;
        var op23 = "";
        if (res.code == 2) {
            window.location.href = "login.html";
            toast(res.data)
            return
        }
        console.log("======>",res.data.list)
        if (res.data.list.length > 0) {
            var newLs = "";
            if (!status) {
                newLs = `<img class="nodatavip" src="assets/images/nouservip.png"/>`
            } else {
                newLs = "";
            }
            $.each(res.data.list, function (index, data) {

                op23 = `<div class="producInter">
            <div class="produc-list-">
              <div class="produc-list-100 b-b paddingBottom">
                <div class="produc-list-c">
                  <div class="fontSize16 c-style color_f ${data.type == 0 ? 'color_18751C' : 'color_F11539'}">${data.type == 0 ? 'bullish' : 'bearish'} </div>
                  <span class="color_32ECBD m-l-r-20">${data.stock_name}</span><span class="color_8E">${data.CreatedAt.substring(0, 10)}</span>
                </div>
                <div class="fontSize24  name-style color_32ECBD displaySpaceAround">
                  <div>
                    <div class="color_f fontSize16">$${data.buy_price}</div>
                    <div class="color_8E fontSize12">Buy</div>
                  </div>
                  <div>
                    <div class="color_f fontSize16">$${data.sale_price}</div>
                    <div  class="color_8E fontSize12">Sell</div>
                  </div>
                  <div>
                    <div class="color_f fontSize16">${data.reach}%</div>
                    <div class="color_8E fontSize12">Reach</div>
                  </div>
                </div>
              </div>
            </div>
            </div>`
            $(".produc-list-data-y-j-n").append(op23 + newLs);
            });
          
           
        } else {

            if (!status) {
                op23 = `<img class="nodatavip" src="assets/images/nouservip.png"/>`
                $(".produc-list-data-y-j-n").append(op23);
            }


        }
    },
});
$.ajax({
    type: "get",
    url: `${baseUrl}/user/product/getlist?is_end=0&type_id=2`,
    dataType: "json",
    headers: {
        Authorization: `Bearer ${tokens.token}`,
    },
    success: function (res) {
        let { list, status } = res.data;
        var op23 = "";
        if (res.code == 2) {
            window.location.href = "login.html";
            toast(res.data)
            return
        }
        if (res.data.list.length > 0) {

            var newL = "";
            if (!status) {
                newL = `<img class="nodatavip" src="assets/images/nouservip.png"/>`
            } else {
                newL = "";
            }
            $.each(list, function (index, data) {

                op23 = `<div class="producInter">
            <div class="produc-list-">
              <div class="produc-list-100 b-b paddingBottom">
                <div class="produc-list-c">
                  <div class="fontSize16 c-style color_f ${data.type == 0 ? 'color_18751C' : 'color_F11539'}">${data.type == 0 ? 'bullish' : 'bearish'} </div>
                  <span class="color_32ECBD m-l-r-20">${data.stock_name}</span><span class="color_8E">${data.CreatedAt.substring(0, 10)}</span>
                </div>
                <div class="fontSize24  name-style color_32ECBD displaySpaceAround">
                  <div>
                    <div class="color_f fontSize16">$${data.buy_price}</div>
                    <div class="color_8E fontSize12">Buy</div>
                  </div>
                  <div>
                    <div class="color_f fontSize16">$${data.sale_price}</div>
                    <div  class="color_8E fontSize12">Sell</div>
                  </div>
                  <div>
                    <div class="color_f fontSize16">${data.reach}%</div>
                    <div class="color_8E fontSize12">Reach</div>
                  </div>
                </div>
              </div>
            </div>
            </div>`

            $(".produc-list-data-y-j-n-chang").append(op23 + newL);

            });
          
            
        } else {

            if (!status) {
                op23 = `<img class="nodatavip" src="assets/images/nouservip.png"/>`
                $(".produc-list-data-y-j-n-chang").append(op23);
            }


        }
    },
});
