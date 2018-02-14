import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from '../base/fromBase'
import {hydrate} from "../../common";
import validate from "mobx-form-validate";
import {persist} from "mobx-persist/lib/index";

useStrict(true);
class gestDetailStore extends Base {
    //主数据
    @observable data={
        GestName:'汤姆',
        GestSex:'男',
        GestBirthday:'2017-09-01',
        GestAddress:'北京中南海2#2001',
        EMail:'good@sohu.com',
        IsVIP:'是',
        VIPAccount:2009,
        PrepayMoney:2590,
        LevelName:'金卡',
    }
    pets=[{
        ID:'',
        PetCode:'',
        PetName:'',
        PetSex:'',
        PetBirthday:'2017-01-01',
        Age:2,
        PetSkinColor:'#202911',
        PetBreed:''
    },{
        ID:'',
        PetCode:'',
        PetName:'',
        PetSex:'',
        PetBirthday:'2017-01-01',
        Age:2,
        PetSkinColor:'#202911',
        PetBreed:''
    },{
        ID:'',
        PetCode:'',
        PetName:'',
        PetSex:'',
        PetBirthday:'2017-01-01',
        Age:2,
        PetSkinColor:'#202911',
        PetBreed:''
    }]
}
export default new gestDetailStore();