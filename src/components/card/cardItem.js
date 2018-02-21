import React, {Component} from 'react';
import {CardItem,Icon,Text,Right,Left,Body} from 'native-base';
import ItemBase from "./itemBase";

class ExtensionCardItem extends ItemBase{
    constructor(props){
        super(props);
    }
    render(){
        let {store,label, name,onPress,...props} = this.props;
        let value = store.data[name];
        return (
            <CardItem {...props}>
                <Body style={{ flexDirection:'row' }}>
                    <Text note style={{width:80,textAlign:'right'}}>{label}</Text>
                    <Text>{value}</Text>
                </Body>
                <Right>
                    {
                        onPress?<Icon name="ios-arrow-forward" />:null
                    }
                </Right>
            </CardItem>
        )
    }
};
export default ExtensionCardItem;