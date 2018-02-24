import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from "../base/fromBase";

useStrict(true);
class AddGestStore extends Base {
    //主数据
    @observable data={
        @observable GestCode:'',
        @observable GestName:'',
        @observable GestSex:'',
        @observable GestBirthday:'',
        @observable MobilePhone:'',
        @observable EMail:'',
        @observable GestAddress:'',
        @observable IsVIP:"",
        @observable GestStyle:'',
        @observable Remark:''
    }

    onFailed(exception){
        showToast("检索会员信息失败");
    }

    addConfig:{
    }

    onIni(){
        request.Gest.GetVipAddPageConfig().then(result=>{
            //showToast( JSON.stringify(result) );
            //this.data = observable(result.Item);
            this.addConfig=result;
        },this.onFailed.bind(this));
    }
}

export default new AddGestStore();