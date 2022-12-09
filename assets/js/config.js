var baseUrl = "https://api.stock-plouto.com";
// var baseUrl =   "http://192.168.1.11:8080"
// var arrList = ["PayPal", "Stripe"];
// TODO 去掉PayPal支付就是隐藏掉js里面的  style="${index==0?'display:none':''}"
var arrList = ["PayPal", "Stripe"];
var productData = null;//当前商品信息
var renewals ="Renewals";//续费
var period= 'Remaining quota of this period ';
var timeOut=2000; 
var intermediatemembergoodsCode=4;
var advancedmembergoodsCode = 4;
var starvipgoodsCode =4;
var silvermembersgoodsCode =4;
var stripeKey="pk_live_51L8IpsIzNzEUKhl8uXHCShyfEXTUAcetBsKbaG690FCXWGcBlFWoxbRdqsKjvKjh2k1WSkRKXYhRl3iZVqLjwZSI00fmzBBSTm";