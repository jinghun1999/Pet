import request from './request'

//请求类型
const RequestType={
    Get:0,
    Post:1
};

const serverAddress='http://petservice.yinway.cn/service/';
const authAddress='http://petservice.yinway.cn/auth/api/';
const consoleAddress='http://petservice.yinway.cn/console/api/';

class WebApiProxy {
    Auth = {
        Login:params=>this.do(authAddress,"AD",RequestType.Get,params)
    }
    Tenant = {
        GetTenantDBByTenantID:params=>this.do(consoleAddress,"TenantManage/GetTenantDBByTenantID",RequestType.Get,params),
    }
    ItemType = {
        GetModel:params=>this.do(serverAddress,"Api/ItemType/GetModel",RequestType.Get,params),
        Add:params=>this.do(serverAddress,"Api/ItemType/Add",RequestType.Post,params)
    }
    do(head,url,type,params){
        if( type == RequestType.Get ){
            return request.getJson(head + url,params);
        }else if(type == RequestType.Post){
            return request.postJson(head + url,params);
        }else{
            showToast("应用程序产生异常");
        }
    }
};

export default new WebApiProxy();