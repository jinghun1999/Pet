import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, StyleSheet,TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from "./inputBase";
import validateHepler from "./validateHepler";

@observer
class ValidateInputDate extends InputBase{
    constructor(props){
        super(props);
    }
    async showDatePicker(){
        const {data,name,onChange,onCatch} = this.props;
        let value = data[name];
        try {
            const {action, year, month, day}=await DatePickerAndroid.open({
                date:
                    (!value ||
                        value==null ||
                        value == "") ? new Date() : new Date(value)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                onChange(year + "-" + (month+1).toString() + '-' + day );
            }
        } catch ({code, message}) {
            onCatch(code,message);
        }
    }

    render(){
        let { data,label,name,IsValidate,placeholder } = this.props;
        if(IsValidate && validateHepler.getMess(data,name)){
            return (
                <Item error fixedLabel  onPress={this.showDatePicker.bind(this)}>
                    <Label>{label}</Label>
                    <Input placeholderTextColor='#b1b1b1' editable={false} placeholder={placeholder} value={data[name]} />
                    <Icon name='close-circle' />
                </Item>
            )
        }else {
            return (
                <Item fixedLabel style={this.style.rightPadding} onPress={this.showDatePicker.bind(this)}>
                    <Label>{label}</Label>
                    <Input placeholderTextColor='#b1b1b1' editable={false} placeholder={placeholder} value={data[name]} />
                </Item>
            )
        }
    }
}

export default ValidateInputDate;