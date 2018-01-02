import request from './request'

//请求类型
const RequestType={
    Get:0,
    Post:1
};

const serverAddress='http://petservice.yinway.cn/service/';
const authAddress='http://petservice.yinway.cn/auth/';
const consoleAddress='http://petservice.yinway.cn/console/api/';

class WebApiProxy {
    Tenant = {
        GetTenantDBByTenantID:params=>this.do(consoleAddress,"TenantManage/GetTenantDBByTenantID",RequestType.Get,params),
    }

    do(head,url,type,params){
        if( type == RequestType.Get ){
            return request.getJson(head + url,params);
        }else if(type == RequestType.Post){
            return request.postJson(head + url,params);
        }
    }
};

export default new WebApiProxy();