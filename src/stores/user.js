import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from './base'
import { persist } from 'mobx-persist'

const Buffer = require('buffer').Buffer

useStrict(true);
class UserStore extends Base{
    //主数据
    @observable data={}
    //凭证数据
    @persist @observable token = {}

    @action fill(r){

        debugger;

        //暂时这样，以后改成从后台填充
        //1、验证
        if(!r || !r.Mobile || !r.HospitalId || !r.Hospitals || r.Hospitals.length==0){
            throw new Error("验证错误");
        }
        //2、生成token
        const hospital = r.Hospitals.fristOne(item=>item.ID==r.HospitalId);
        if( hospital == null ){
            throw new Error("数据错误");
        }
        const token = "Mobile " + new Buffer(r.Mobile + ":" + hospital.Registration + ":" + r.Token.token).toString('base64');
        //3、填充用户数据
        this.token = token;
    }

    @action
    relogin(callback){
    }
}
export default new UserStore()