import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from './inputBase'
import validateHepler from './validateHepler'

@inject('inputBaseStyle')
@observer
export default class InputText extends InputBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label,name, placeholder,store} = this.props;
        let onChanged = store.onUpdate.bind(store);
        if(store.submited && validateHepler.getMess(store.data,name)){
            return (
                <Item error fixedLabel>
                    <Label>{label}</Label>
                    <Input placeholder={placeholder} value={store.data[name]} placeholderTextColor='#b1b1b1'  onChangeText={txt => onChanged(name,txt)} />
                    <Icon name='close-circle' style={[this.style.leftMargin]} />
                </Item>
            )
        }else {
            return (
                <Item fixedLabel style={this.style.rightPadding}>
                    <Label>{label}</Label>
                    <Input placeholder={placeholder} value={store.data[name]} placeholderTextColor='#b1b1b1' onChangeText={txt => onChanged(name,txt)} />
                </Item>
            )
        }
    }
}