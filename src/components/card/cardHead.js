import React, {Component} from 'react';
import {CardItem,Icon,Text,Right,Left,Body} from 'native-base';
import ItemBase from "./itemBase";

class ExtensionCardHead extends ItemBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label,border,onPress,...props} = this.props;
        return (
            <CardItem header {...props} style={border?{borderBottomWidth:1,borderColor:'#BBBBBB'}:{}}>
                <Text>{label}</Text>
            </CardItem>
        )
    }
};
export default ExtensionCardHead;