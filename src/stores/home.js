import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from './base'

useStrict(true);
class HomeStore extends Base{
    @observable data={}
    @observable title="这里是首页"
}

export default new HomeStore()