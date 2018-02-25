import {observable,extendObservable, computed, action, runInAction, useStrict} from 'mobx'
import validate from 'mobx-form-validate';
import Base from "../base/fromBase";

useStrict(true);
class AddGestStore extends Base {
    //主数据
    @observable data={
        @validate(/\S+$/, '会员编号必填')
        @observable GestCode:'',
        @validate(/\S+$/, '会员姓名必填')
        @observable GestName:'',
        //@observable RewardPoint:0,
        @observable GestSex:'',
        @observable GestBirthday:'',
        @observable MobilePhone:'',
        @observable EMail:'',
        @observable GestAddress:'',
        @observable IsVIP:"",
        @observable GestStyle:'',
        @observable Remark:'',
        @observable Status:'',

        @computed get validateItemGestName(){
            //1、自定义验证
            if(this.GestName==null || this.GestName=="") {
                return "会员姓名必填";//返回错误信息
            }else{
                return "";
            }
        },
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
        this.onShallCopy(this.data,{...result.Item});

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

        this.onFinishIni();//初始化结束
    }
}

export default new AddGestStore();