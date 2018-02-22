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
        Login:params=>this.start(authAddress,"AD",RequestType.Get,params)
    }
    Tenant = {
        GetTenantDBByTenantID:params=>this.do(consoleAddress,"TenantManage/GetTenantDBByTenantID",RequestType.Get,params),
    }
    ItemType = {
        GetModel:params=>this.do(serverAddress,"Api/ItemType/GetModel",RequestType.Get,params),
        Add:params=>this.do(serverAddress,"Api/ItemType/Add",RequestType.Post,params)
    }
    Gest = {
        GetPages:params=>this.do(serverAddress,"Api/Gest/GetPageRecord",RequestType.Post,params),
        GetMoneyRecord:params=>this.do(serverAddress,"Api/Report/GetMoneyRecord",RequestType.Get,params)
    }
    Gload = {
        GetConfig:()=>this.do(serverAddress,"Api/Persons/GetUserConfig",RequestType.Get),
    }
    do(head,url,type,params){
        let parent=this;
        return new Promise(function (resolve, reject){
            let exception=(err)=>{
                if (err && (err.status == 450 || err.status == 401 )) {
                    parent.Navigation.navigate('Login');
                }else{
                    reject(err);
                }
            };
            let scuessHandler = ()=>{
                parent.start(head,url,type,params).then(o=>resolve(o),exception);
            };
            parent.onCheckToken().then(scuessHandler,exception);
        });
    }
    start(head,url,type,params){
        if( type == RequestType.Get ){
            return request.getJson(head + url,params);
        }else if(type == RequestType.Post){
            return request.postJson(head + url,params);
        }
    }
    onReady(navigation,login){
        this.Navigation=navigation;
        this.LoginStore=login;
    }
    onCheckToken(){
        //检查token，如果token已经过期，则跳转到登陆
        //检查token，如果token快过期，则自动获取token
        let parent = this;
        return new Promise(function (resolve, reject) {
            parent.LoginStore.onCheckToken(
                ()=>parent.Navigation.navigate('Login'),
                ()=>parent.refreshToken(
                    ()=>resolve(),
                    ()=>reject()
                ),
                ()=>resolve());
        })
    }
    refreshToken(handler,exception){
        this.LoginStore.onCommit(()=>{
            handler();
        },err=>{
            exception(err);
        });
    }

    Navigation=null;
    LoginStore=null;
};

export default new WebApiProxy();