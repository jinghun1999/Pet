import {observable, computed, action, runInAction, useStrict} from 'mobx'
import validate from 'mobx-form-validate';
import Base from './fromBase'

useStrict(true);
class HomeStore extends Base{
    @observable data={
        @validate(/\S+$/, '姓名必填')
        @observable name:"",
        @validate(/\S+$/, '手机必填')
        @observable mobile:"",

        @computed get validateItemName(){
            //1、自定义验证
            if(!this.name) {
                return "";//返回错误信息
            }else{
                return "";
            }
        },
    }

    @observable title=""
    @action updateConfig(config){
        Object.assign( this.data , this.data , config );
    }

    fill(){
        serviceProxy.Tenant.GetTenantDBByTenantID({tenantID:'40C521CF-C4B8-4445-97AC-0CA16D830D24'}).then(result=>{
            alert("成功");
        },err=>{
            alert(JSON.stringify(err));
        });
    }
}

export default new HomeStore()