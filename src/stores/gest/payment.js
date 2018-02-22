import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from "../base/fromBase";
import {hydrate} from "../../common";
import validate from "mobx-form-validate";

//余额
useStrict(true);
class PaymentCollection{
    @observable list=[]
    @observable ladding=false
    @observable gestId=""
    pageSize=30
    end=false
    pageIndex=1

    @action onIni(){
        this.pageIndex=1;
        this.end=false;
        this.ladding=false;
        this.list=[];
        this.onQuery();
    }
    //提交查询
    @action onQuery(){
        if( this.ladding || this.end ){
            return;
        }
        this.ladding=true;
        let succeed=d=>{
            runInAction(()=>{
                this.ladding=false;
                if(d.length < this.pageSize){
                    this.end=true;
                }
                this.list.push(...d);
            });
        };
        let failed=e=>{
            showToast( JSON.stringify(e) );
            runInAction(()=>{
                this.ladding=false;
            });
        };
        queryObj = this.getQuery();
        serviceProxy.Gest.GetPrePayRecord(queryObj).then(succeed.bind(this),failed.bind(this));
    }
    getQuery(){
        let now = new Date();
        now.setDate(now.getDate()+1);
        return {
            index:this.pageIndex,
            pageSize:this.pageSize,
            gestID:this.gestId,
            businessType:-1,//为空表示“消费”、“充值”
            startDate:'2018-01-01',
            endDate:now.Format("yyyy-MM-dd")
        }
    }
}

useStrict(true);
class PaymentListStore extends Base {
    //主数据
    @observable data={
        @observable list:new PaymentCollection()
    }
    @action onIni(gestId){
        this.data.list.gestId=gestId;
        this.data.list.onIni();
    }
}

export default new PaymentListStore();