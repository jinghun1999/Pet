import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import {CardItem,Icon,Text,Right,Left,Body} from 'native-base';
import ItemBase from "./itemBase";

class ExtensionCardItem extends ItemBase{
    constructor(props){
        super(props);
    }
    renderItem(){
        let {store,label, name,onPress,...props} = this.props;
        let value = store.data[name];
        return (
            <CardItem {...props} onPress={ onPress }>
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
    render(){
        let {onPress} = this.props;
        if( onPress ){
            return <TouchableOpacity onPress={onPress}>
                {
                    this.renderItem()
                }
            </TouchableOpacity>;
        }else{
            return this.renderItem();
        }
    }
};
export default ExtensionCardItem;