import React, {Component} from 'react';
import {CardItem,Icon,Text,Right,Left,Body} from 'native-base';
import ItemBase from "./itemBase";

class ExtensionCardHead extends ItemBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label,onPress,...props} = this.props;
        return (
            <CardItem header {...props} style={{ borderBottomWidth:1,borderColor:'#BBBBBB' }}>
                <Text>{label}</Text>
            </CardItem>
        )
    }
};
export default ExtensionCardHead;