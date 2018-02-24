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
        @observable Remark:'',
        @observable Status:'',
        @observable RewardPoint:0
    }

    @observable Levels=[]//会员等级
    @observable GestStatus=[]//会员状态
    @observable SexTypes=[]//性别

    onFailed(exception){
        showToast("检索会员信息失败");
    }
    onIni(){
        request.Gest.GetVipAddPageConfig().then(result=>{
            this.onIniSource(result);
        },this.onFailed.bind(this));
    }
    @action onIniSource(result){
        this.addConfig=result;
        this.Levels=result.Levels.map(item=>({
            text : item.LevelName,
            value : item.LevelCode
            }));

        this.GestStatus=result.GestStatus.extendMap(item=>({
                text : item.value_nameCN,
                value : item.Code
            }));

        this.SexTypes=result.SexTypes.extendMap(item=>({
            text : item.value_nameCN,
            value : item.Code}));
    }


}

export default new AddGestStore();