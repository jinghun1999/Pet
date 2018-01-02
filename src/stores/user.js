import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from './base'
import { persist } from 'mobx-persist'

useStrict(true);
class UserStore extends Base{
    //主数据
    @observable data={}
    //凭证数据
    @persist @observable token = {access_token: ''}

    @action
    relogin(callback){
    }
}
export default new UserStore()