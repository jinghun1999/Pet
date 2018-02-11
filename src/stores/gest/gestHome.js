import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from '../base/fromBase'
import {hydrate} from "../../common";
import validate from "mobx-form-validate";
import {persist} from "mobx-persist/lib/index";

class GestCollection{
    @observable list=[]
    @observable ladding=false
    end=false
    pageIndex=1

    @observable sortModel=0

    sortOptions=[{
        Key:"CreatedOn",
        Title:"创建时间",
        Desc:true
    },{
        Key:"VIPAccount",
        Title:"余额",
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
    //提交查询
    @action onQuery(){
        if( this.ladding || this.end ){
            return;
        }
        this.ladding=true;
        let succeed=d=>{
            runInAction(()=>{
                this.ladding=false;
                this.list.push(d[0]);
                if(this.list.length>20){
                    this.end=true;
                }
            });
        };
        let failed=e=>{
            runInAction(()=>{
                this.ladding=false;
            });
        };
        queryObj = this.getQuery();
        serviceProxy.Gest.GetPages(queryObj).then(succeed.bind(this),failed.bind(this));
    }

    getQuery(){
        if( this.sortModel < 0 || this.sortModel >= this.sortOptions.length ){
            showToast("数据错误，查询失败");
            return;
        }
        sortItem = this.sortOptions[this.sortModel];
        return {
            index:this.pageIndex,
            pageSize:25,
            items:[],
            sorts:[{Field:sortItem.Key,Title:sortItem.Title,Sort:{Name:sortItem.Desc?"Desc":"Asc",Title:sortItem.Desc?"降序":"升序"}}]
        }
    }
}

useStrict(true);
class GestHomeStore extends Base {
    //主数据
    @observable data={
        @observable qr:'',
        @observable list:new GestCollection()
    }

}
export default new GestHomeStore();