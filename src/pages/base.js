import React, {Component} from 'react';
import StoreBase from '../stores/base'

export default class PageBase extends Component{
    constructor(props){
        super(props);
        for(let o in this.props){
            if(!this.props[o]) continue;
            if(StoreBase.prototype.isPrototypeOf(this.props[o].__proto__)) {
                this.store = this.props[o];
            }else if( this.props[o].hasOwnProperty(customStyleName) && this.props[o][customStyleName] ){
                this.style = this.props[o];
            }
        }
    }
    //存储
    store={};
    //样式
    style={};
}