import {observable, computed, action, runInAction, useStrict} from 'mobx'
import Base from '../base/fromBase'

useStrict(true);
class GestHomeStore extends Base {
}

export default new GestHomeStore();