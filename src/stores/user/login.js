import {observable,action,computed, runInAction, useStrict} from 'mobx'
import Base from '../base/base'
import { create,persist } from 'mobx-persist'
import validate from "mobx-form-validate";
import _ from "lodash";
import {hydrate} from '../../common/index'
import { NavigationActions } from 'react-navigation'

useStrict(true);
class LoginStore extends Base{
    //主数据
    @persist('object') @observable data={
        @validate(/\S+$/, '手机号必填')
            @observable mobile:"",

        @validate(/\S+$/, '密码必填')
            @observable password:"",

        @observable verCode:"",

        @observable type:"m",

        @computed get validateItemMobile(){
            //1、自定义验证
            if(!this.mobile=="123456") {
                return "手机号格式不正确";//返回错误信息
            }else{
                return "";
            }
        },
    }
    //凭证数据
    @persist('object') @observable token = {}
    //提交登陆
    @action
    onCommit(sucessCallBack,errCallBack){
        serviceProxy.Auth.Login({
            identity:this.data.mobile,
            password:this.data.password,
            verCode:this.data.verCode,
            type:this.data.type
        }).then(
            data=>{
                this.fill(data);
                if(sucessCallBack){
                    sucessCallBack();
                }
            },err=>{
                if(errCallBack){
                    errCallBack(err);
                }
            });
    }
    @action fill = _.debounce((r)=>{
        runInAction(()=>{
            this.token = observable(r.Token);
        });
    }, 400)
    @action onLoadLocal=(callback)=>{
        hydrate('LoginStore', this).then(o=>callback(this));
    }
    onCheckToken(timeOutHandler,refreshHandler,sucessHandler){
        if( JSON.stringify(this.token) === "{}" || this.token==null ){
            timeOutHandler();//已经过期
            return;
        }
        if( !this.token.token == null || !this.token.timeout == null){
            timeOutHandler();//已经过期
            return;
        }

        let timeout = this.token.timeout.ToDateTime();
        let now = new Date();
        if(timeout < now){
            timeOutHandler();//已经过期
        }else if( now.InterVal(timeout) < 15 ){
            refreshHandler();//快过期
        }
        else{
            //一切顺利
            sucessHandler();
        }
    }
}

const _loginStore = new LoginStore();
export default _loginStore;