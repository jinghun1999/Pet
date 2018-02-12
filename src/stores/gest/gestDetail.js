import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from '../base/fromBase'
import {hydrate} from "../../common";
import validate from "mobx-form-validate";
import {persist} from "mobx-persist/lib/index";

useStrict(true);
class gestDetailStore extends Base {
    //主数据
    @observable data={
    }
}
export default new gestDetailStore();