import {observable,extendObservable, computed, action, runInAction, useStrict} from 'mobx'
import validate from 'mobx-form-validate';
import Base from "../base/fromBase";

useStrict(true);
class AddPetStore extends Base {
    //主数据
    @observable data={
    }

    Races=[]//种类
    @observable Breeds=[]//品种
    BirthStatus=[]//绝育状态
    Sexs=[]//性别
    Status=[]//宠物状态
    Colors=[]//宠物颜色

    @observable gestId=""//会员Id
    onFailed(exception){
        showToast("检索宠物信息失败");
    }
    onIni(id){
        this.gestId = id;
        serviceProxy.Pet.GetAddPetConfig({id:this.gestId}).then(result=>{
            this.onIniSource(result);
        },this.onFailed.bind(this));
    }
    onRacesChanged(name,item){
        this.onUpdate(name,item.value);//更新值
        this.onUpdate("PetBreed","");//更新值

        serviceProxy.PetRace.GetItems([{
            Field:"RaceID",
            Operator:appParamter.RelationOperators["BeEqualTo"],
            DataType:0,
            Title:"",
            Childrens:null,
            Value:item.value.toString(),
            Conn:0
        }]).then(result=>{
            runInAction( ()=> {
                this.Breeds=[]
                this.Breeds=result.extendMap(item=>({
                    text:item.PetType,
                    value:item.PetType
                }));
            } );
        },ex=>this.onFailed(ex));
    }
    @action onIniSource(result){
        this.onShallCopy(this.data,{...result.Item});
        this.Races=result.Races.map(item=>({
            text : item.BigTypeName,
            value : item.ID
        }));
        this.BirthStatus=result.BirthStatus.extendMap(item=>({
            text : item.value_nameCN,
            value : item.Code
        }));
        this.Sexs=result.Sexs.extendMap(item=>({
            text : item.value_nameCN,
            value : item.Code
        }));
        this.Status=result.Status.extendMap(item=>({
            text : item.value_nameCN,
            value : item.Code
        }));
        this.Colors=result.Colors.extendMap(item=>({
            text : item.value_nameCN,
            value : item.Code
        }));
        this.onFinishIni();//初始化结束

    }
}

export default new AddPetStore();