import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from './base'

useStrict(true);
class UserStore extends Base{
    @observable data={}
}

export default new UserStore()