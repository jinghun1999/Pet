import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from "../base/fromBase";

useStrict(true);
class AddGestStore extends Base {
    //主数据
    @observable data={
        // @observable GestCode:'',
        // @observable GestName:'',
        // @observable CreatedOn:'',
    }

    onIni(){

    }
}

export default new AddGestStore();