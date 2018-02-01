import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, StyleSheet,TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from "./inputBase";
import validateHepler from "./validateHepler";

@observer
class ValidateInputInt extends InputBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label, data , name ,IsValidate, placeholder,onChange,...props} = this.props;
        let value = data[name];
        if(IsValidate && validateHepler.getMess(data,name)){
            return (
                <Item error fixedLabel {...props}>
                    <Label>{label}</Label>
                    <Input placeholder={placeholder} keyboardType="numeric" value={`${value}`} onChangeText={onChange} placeholderTextColor='#b1b1b1' />
                    <Icon name='close-circle' />
                </Item>
            )
        }else {
            return (
                <Item fixedLabel style={this.style.rightPadding} {...props}>
                    <Label>{label}</Label>
                    <Input placeholder={placeholder} keyboardType="numeric" value={`${value}`} onChangeText={onChange} placeholderTextColor='#b1b1b1' />
                </Item>
            )
        }
    }
};

export default ValidateInputInt;