import {observable, action, useStrict} from 'mobx'
import Base from './base'

useStrict(true);
class WelcomeStore extends Base{
    //主数据
    @observable data={
    }
    @action onEndLoading(){
        this.loading=false;
    }
    @observable loading:true
}

const welcomeStore = new WelcomeStore();
export default welcomeStore;