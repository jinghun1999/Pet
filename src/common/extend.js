import pinyin from "./pinyin";
import uuid from "uuid";
import {Platform, ToastAndroid} from "react-native";

//日期扩展
Date.prototype.InterVal=function (date) {
    var date3=date.getTime()-this.getTime()  //时间差的毫秒数
    // 计算出相差天数
    var days=Math.floor(date3/(24*3600*1000))
    //计算出小时数
    var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))
    //计算相差秒数
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000)
    return (days * 24 * 60) + (hours*60) + minutes + (seconds / 60.00);//" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒"
}

//日期格式化
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
//字符串转日期
String.prototype.ToDate = function(){
    var fullDate = this.toString().split("-");

    if( fullDate.length != 3 ){
        return null;
    }
    if( fullDate[2].length > 2 ){
        fullDate[2] = fullDate[2].substring(0,2);
    }
    return new Date(fullDate[0], fullDate[1]-1, fullDate[2], 0, 0, 0);
}
//字符串转日期时间
String.prototype.ToDateTime = function(){
    var tempStrs = this.split(" ");
    var dateStrs = tempStrs[0].split("-");
    var year = parseInt(dateStrs[0], 10);
    var month = parseInt(dateStrs[1], 10) - 1;
    var day = parseInt(dateStrs[2], 10);
    var timeStrs = tempStrs[1].split(":");
    var hour = parseInt(timeStrs [0], 10);
    var minute = parseInt(timeStrs[1], 10);
    var second = parseInt(timeStrs[2], 10);
    var date = new Date(year, month, day, hour, minute, second);
    return date;
}
//获取第一个字母
String.prototype.GetFirstChar=function(){
    if(!this || this.length<1 ){
        return "";
    }
    return pinyin.getFullChars(this).substring(0, 1);
}
//转换拼音
String.prototype.ToPinyin=function(){
    return pinyin.getFullChars(this);
}
//获取数组第一个元素
Array.prototype.fristOne=function (findIndexHandler) {
    for( var i=0;i<this.length;i++){
        if(findIndexHandler && findIndexHandler(this[i])){
            return this[i];
        }
    }
    return null;
}
//获取数组第一个元素
Array.prototype.fristOneIndex=function (findIndexHandler) {
    for( var i=0;i<this.length;i++){
        if(findIndexHandler && findIndexHandler(this[i])){
            return i;
        }
    }
    return -1;
}
//查找元素集合
Array.prototype.removeItem=function (findIndexHandler) {
    for( var i=0;i<this.length;i++){
        if(findIndexHandler && findIndexHandler(this[i])){
            this.splice(i,1);
            return this;
        }
    }
    return this;
}
//guid 生成
class Guid {
    New() {
        return uuid.v1();
    }
}
//消息提示
const showToast = (text,flag)=>{
    if(Platform.OS=='android'){
        ToastAndroid.show(text, ToastAndroid.SHORT);
    }else{
        if(flag){
            alert(text)
        }
    }
}

const guid = new Guid();
export default { guid , showToast };