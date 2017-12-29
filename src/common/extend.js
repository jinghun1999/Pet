import pinyin from "./pinyin";
import uuid from "uuid";
import {Platform, ToastAndroid} from "react-native";

//日期扩展
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