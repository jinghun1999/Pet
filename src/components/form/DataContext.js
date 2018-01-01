import React, {Component} from 'react';
import {Form} from 'native-base';
import {InputBase} from './native-base-validate'
import StoreBase from "../../stores/base";
import {observer, inject} from 'mobx-react/native';

export default class DataContext extends Component{
    constructor(props){
        super(props);
    }
    render() {
        let {children,onChanged,data} = this.props;
        var childrenWithProps = React.Children.map(children, child =>{
            //若 child 继承至 InputBase
            if(child.type && child.type.prototype && InputBase.prototype.isPrototypeOf(child.type.prototype)){
                return React.cloneElement(child, { onChanged:onChanged,data:data})
            }else{
                return child;
            }
        });
        return (
            <Form>
                {childrenWithProps}
            </Form>
        )
    }
}