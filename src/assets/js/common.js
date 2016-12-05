export const api = "http://tym.taoyumin.cn";
export const geturl = function(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var regchina = /[\u4e00-\u9fa5]/g;
	var url = window.location.search.substr(1)
     var r = regchina.test(decodeURIComponent(url)) ? decodeURIComponent(url).match(reg) : url.match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}