import React, {Component} from 'react';
import {CardItem,Icon,Text,Right,Left,Body} from 'native-base';
import ItemBase from "./itemBase";

class ExtensionCardFooter extends ItemBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label,onPress,...props} = this.props;
        return (
            <CardItem footer {...props}>
                <Text>{label}</Text>
            </CardItem>
        )
    }
};
export default ExtensionCardFooter;