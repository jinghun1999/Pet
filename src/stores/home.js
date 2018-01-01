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

        @computed get validateItemTransferName(){
            //1、自定义验证
            if( this.name && this.name == "1" ) {
                return "姓名不能为1";
            }else{
                return "";
            }
        },
    }

    @observable title="这里是首页"
    @action updateConfig(config){
        //this.data.name="12";
        Object.assign( this.data , this.data , config );
    }
    @action update(name,value){
        this.data[name]=value;
    }
}

export default new HomeStore()