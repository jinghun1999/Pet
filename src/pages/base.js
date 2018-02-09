import React, {Component} from 'react';
import StoreBase from '../stores/base/base'

export default class PageBase extends Component{
    constructor(props){
        super(props);
        for(let o in this.props){
            if(!this.props[o]) continue;
            if(StoreBase.prototype.isPrototypeOf(this.props[o].__proto__)) {
                if(JSON.stringify(this.store)=="{}"){
                    this.store = this.props[o];
                }
                this.stores[o] = this.props[o];
            }else if( this.props[o].hasOwnProperty(customStyleName) && this.props[o][customStyleName] ){
                if(JSON.stringify(this.style)=="{}"){
                    this.style = this.props[o];
                }
                this.styles[o] = this.styles[o];
            }
        }
    }
    //存储
    store={};
    //样式
    style={};
    //store 列表
    stores={};
    //style 列表
    styles={}
}