import {observable,action,computed, runInAction, useStrict} from 'mobx'
import Base from './base'
import { create,persist } from 'mobx-persist'
import validate from "mobx-form-validate";
import _ from "lodash";
import {hydrate} from '../common'
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
    onCommit(){
        serviceProxy.Auth.Login({
            identity:this.data.mobile,
            password:this.data.password,
            verCode:this.data.verCode,
            type:this.data.type
        }).then(
            data=>{
                this.fill(data);
            },err=>{
                showToast(err);
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
    // onCheck(dispatch){
    //     resetAction = NavigationActions.reset({
    //         index: 0,
    //         actions: [
    //             NavigationActions.navigate({routeName:'Main',params:{transition:'forVertical'}})//要跳转到的页面名字forVertical、forHorizontal
    //         ]
    //     });
    //     dispatch(resetAction)
    // }
    onCheckToken(navigation){

        debugger;

        navigation.navigate('Login',{transition:'forHorizontal'});
        // resetAction = NavigationActions.reset({
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({routeName:'Login'})//要跳转到的页面名字
        //     ]
        // });
        // dispatch(resetAction)
    }
}

const _loginStore = new LoginStore();
export default _loginStore;
//hydrate('LoginStore', _loginStore);