import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from '../base/fromBase'
import {hydrate} from "../../common";
import validate from "mobx-form-validate";
import {persist} from "mobx-persist/lib/index";

class saleBillCollection{
    @observable collection=[]
    @observable ladding=false
    end=false
    pageIndex=1
    pageSize=25
    @observable sortModel=0

    sortOptions=[{
        Key:"CreatedOn",
        Title:"销售时间",
        Desc:true
    },{
        Key:"VIPAccount",
        Title:"金额",
        Desc:true
    }]
    @action onSwitchSort(key){
        let index = this.sortOptions.fristOneIndex(o=>o.Key===key);
        if(index<0){
            showToast("切换查询条件失败");
            this.sortModel=0;
        }else{
            this.sortModel=index;
        }
    }
    @action onIni(){
        this.pageIndex=1;
        this.end=false;
        this.ladding=false;
        this.collection=[];
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
                this.collection.push(...d);
            });
        };
        let failed=e=>{
            runInAction(()=>{
                this.ladding=false;
            });
        };
        queryObj = this.getQuery();
        serviceProxy.SettleAccounts.SearchPageData(queryObj).then(succeed.bind(this),failed.bind(this));
    }
    getQuery(){
        if( this.sortModel < 0 || this.sortModel >= this.sortOptions.length ){
            showToast("数据错误，查询失败");
            return;
        }
        sortItem = this.sortOptions[this.sortModel];
        return {
            searchGest:'',//会员编号
            cashNum:'',//结算单号
            from:'2017-01-01',//开始日期
            to:'2019-01-01',//截至日期
            cashier:'',//收银员
            pageSize:this.pageSize,
            pageIndex:this.pageIndex
        }
    }
}

useStrict(true);
class SaleListStore extends Base {
    //主数据
    @observable data={
        @observable list:new saleBillCollection()
    }
    @action onIni(){
        this.data.list.onIni();
    }
}

export default new SaleListStore();