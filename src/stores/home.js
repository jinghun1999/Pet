import {observable, computed, action, runInAction, useStrict} from 'mobx'
import validate from 'mobx-form-validate';
import Base from './fromBase'

useStrict(true);
class HomeStore extends Base{
    @observable data={
    }

    fill(){
    }
}

export default new HomeStore()