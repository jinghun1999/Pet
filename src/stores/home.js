import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from './fromBase'

useStrict(true);
class HomeStore extends Base{
    @observable data={
        @validate(/\S+$/, '姓名必填')
        name:"",
        @validate(/\S+$/, '手机必填')
        mobile:"",
    }
    @observable title="这里是首页"
}

export default new HomeStore()