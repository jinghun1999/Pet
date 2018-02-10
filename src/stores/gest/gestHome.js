import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from '../base/fromBase'
import {hydrate} from "../../common";
import validate from "mobx-form-validate";
import {persist} from "mobx-persist/lib/index";


class GestCollection{
    @observable list=[]
    @observable ladding=false
    end=false

    pageQuery={
        index:1,
        pageSize:20,
        items:[],
        sorts:[{Field:'CreatedOn',Title:'创建时间',Sort:{Name:'Desc',Title:'降序'}}]
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
        serviceProxy.Gest.GetPages(this.pageQuery).then(succeed.bind(this),failed.bind(this));
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