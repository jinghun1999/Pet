import React, {Component} from 'react';
import {Card} from 'native-base';
import ItemBase from './itemBase'
import StoreBase from "../../stores/base/base";

export default class DataContext extends Component{
    constructor(props){
        super(props);
        let {store} = this.props;
        if(store == undefined){
            throw new Error('store未定义');
        }
        if(store.data == undefined){
            throw new Error('store未定义data属性');
        }
        if(store.submited == undefined){
            throw new Error('store未定义submited属性');
        }
        if(store.onUpdate == undefined){
            throw new Error('store未定义onUpdate属性');
        }
    }
    render() {
        let {children,store} = this.props;
        let style = this.props.style;
        var childrenWithProps = React.Children.map(children, child =>{
            //若 child 继承至 ItemBase
            if(child.type && child.type.prototype && child.__proto__.isPrototypeOf(ItemBase)){
                return React.cloneElement(child, {store:store})
            }else{
                return child;
            }
        });
        return (
            <Card style={style}>
                {childrenWithProps}
            </Card>
        )
    }
}