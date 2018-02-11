import React, {Component} from 'react';
import {Button,Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from './inputBase'
import validateHepler from './validateHepler'

@inject('inputBaseStyle')
@observer
export default class InputQuery extends InputBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label,name, placeholder,store} = this.props;
        let onChanged = store.onUpdate.bind(store);
        return (<Item>
            <TouchableOpacity  activeOpacity={0.5} style={{alignSelf:'center',backgroundColor:'transparent'}}>
                <Icon name='ios-qr-scanner' />
            </TouchableOpacity>
            <Input placeholder={placeholder} value={store.data[name]} placeholderTextColor='#b1b1b1' onChangeText={txt => onChanged(name,txt)} />
            <Button style={{alignSelf:'center',marginRight:2}}>
                <Text>{label}</Text>
            </Button>
        </Item>);
    }
}