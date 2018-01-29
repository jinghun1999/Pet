import {observable, computed, action, runInAction, useStrict} from 'mobx'
import validate from 'mobx-form-validate';
import Base from './fromBase'

useStrict(true);
class HomeStore extends Base{
    @observable data={
        // @validate(/\S+$/, '姓名必填')
        // @observable name:"",
        // @validate(/\S+$/, '手机必填')
        // @observable mobile:"",
        //
        // @computed get validateItemName(){
        //     //1、自定义验证
        //     if(!this.name) {
        //         return "";//返回错误信息
        //     }else{
        //         return "";
        //     }
        // },
    }

    // @observable title=""
    // @action updateConfig(config){
    //     Object.assign( this.data , this.data , config );
    // }
    //
    // getItem(){
    //
    //
    //     alert(JSON.stringify(user.token));
    //
    //     serviceProxy.ItemType.GetModel({ID:'1A238D7B-4383-4B94-88F8-3A12E1623E84'}).then(result=>{
    //         alert( JSON.stringify(result) );
    //     },err=>{
    //
    //         alert("失败:"+err);
    //
    //     });
    // }
    //
    // fill(){
    //     serviceProxy.Tenant.GetTenantDBByTenantID({tenantID:'40C521CF-C4B8-4445-97AC-0CA16D830D24'}).then(result=>{
    //         alert("成功");
    //     },err=>{
    //         alert(JSON.stringify(err));
    //     });
    // }
    // login(){
    //     serviceProxy.Auth.Login({
    //         identity:'15882434962',
    //         password:'P@ssw0rd',
    //         verCode:'',
    //         type:'m'
    //         }).then( result => {
    //             runInAction(()=>{
    //                 user.fill(result);
    //                 alert("登陆成功:" + user.token);
    //             });
    //     } ,err => {
    //             alert("失败："+err);
    //     });
    // }
    // addItem(){
    //     serviceProxy.ItemType.Add({
    //         ID:'1C205B26-EFE3-4CE0-903B-CD5CAE960FBC',
    //         ItemCode:'WF0000001000',
    //         ItemName:'遛狗',
    //         CateNo:'ICate12',
    //         PackageUnit:'DM00013',
    //         RecipeUnit:'DM00013',
    //         ItemStyle:'美容服务',
    //         BusiTypeCode:'12',
    //         ItemBulk:1,
    //         InputPrice:120,
    //         SellPrice:200,
    //         IsVIPDiscount:'否',
    //         IsSell:'是',
    //         IsCount:'否',
    //         VIPSellPrice:180,
    //         DrugForm:'DM00008',
    //         Remark:'',
    //         ItemStandard:'OK',
    //         BarCode:'',
    //         DealerCode:'',
    //         DealerName:''
    //     }).then(result=>{
    //         alert(JSON.stringify(result));
    //     },err=>{
    //         alert(err);
    //     });
    // }
}

export default new HomeStore()