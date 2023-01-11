var baseUrl = "https://api.stock-plouto.com";
// var baseUrl =   "http://192.168.0.84:8080"
// var arrList = ["PayPal", "Stripe"];
// TODO 去掉PayPal支付就是隐藏掉js里面的  style="${index==0?'display:none':''}"
var arrList = ["PayPal", "Stripe"];
// var count = 1;//当前选择的支付方式，0=stripe，1=paypal
var productData = null;//当前商品信息
var renewals ="Renewals";//续费
var period= 'Remaining quota of this period ';
var timeOut=2000; 
var intermediatemembergoodsCode=4;
var advancedmembergoodsCode = 4;
var starvipgoodsCode =4;
var silvermembersgoodsCode =4;
var payway=0;//0网站  1app
var stripeKey="pk_live_51L8IpsIzNzEUKhl8uXHCShyfEXTUAcetBsKbaG690FCXWGcBlFWoxbRdqsKjvKjh2k1WSkRKXYhRl3iZVqLjwZSI00fmzBBSTm";

var memberList ={
    name3:"Stock vane",
    name5:"Primary member",
    name6:"Intermediate member",
    name7:"Advanced member",
    name10:"Star vip",
    name11:"Silver members"
}
    
 
