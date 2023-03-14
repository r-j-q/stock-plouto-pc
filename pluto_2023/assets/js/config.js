var baseUrl = "https://api.stock-plouto.com";


// var baseUrl =   "https://apitest.stock-plouto.com" //测试环境


var clineUrl ="https://admin.stock-plouto.com/"


// var arrList = ["PayPal", "Stripe"];
// TODO 去掉PayPal支付就是隐藏掉js里面的  style="${index==0?'display:none':''}"
var arrList = ["Bank Card", "PayPal"];
var arrListMax=['Bank Card','USDT','Bank']
var AirwallexEVN ='prod';//demo prod
var countMax = 0; 
var zhekou ='save 5%' 
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
    
 
