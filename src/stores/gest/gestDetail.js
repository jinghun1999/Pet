import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from '../base/fromBase'
import {hydrate} from "../../common";
import validate from "mobx-form-validate";
import {persist} from "mobx-persist/lib/index";

useStrict(true);
class gestDetailStore extends Base {
    //主数据
    @observable data={
    }
    onFailed(exception){
        showToast("检索会员信息失败");
    }
    onIni(id){
        serviceProxy.Gest.GetGestById({ID:id}).then(result=>{
            this.onIniSource(result);
        },this.onFailed.bind(this));
    }
    @action onIniSource(result){
        this.onShallCopy(this.data,result.Gest);
        this.pets=result.Pets;

        this.onFinishIni();//初始化结束
    }
    pets=[]
}
export default new gestDetailStore();