import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from './inputBase'
import validateHepler from './validateHepler'

@inject('inputBaseStyle')
@observer
class ValidateInputDate extends InputBase{
    constructor(props){
        super(props);
    }
    async showDatePicker(){
        let {label,name, placeholder,store} = this.props;
        let onChanged = store.onUpdate.bind(store);
        let value = store.data[name];
        try {
            const {action, year, month, day}=await DatePickerAndroid.open({
                date:
                    (!value ||
                        value==null ||
                        value == "") ? new Date() : new Date(value)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                onChanged(name,year + "-" + (month+1).toString() + '-' + day)
            }
        } catch ({code, message}) {
            showToast(message);
        }
    }
    static defaultProps = {
        formate:"yyyy-MM-dd",
    }
    render(){
        let {label,name,formate, placeholder,store} = this.props;
        let onChanged = store.onUpdate.bind(store);
        let value = store.data[name];
        if( value && (value instanceof Date) ){
            value = value.Format(formate);
        }
        else if(value){
            value = value.ToDate().Format(formate);
        }


        if(store.submited && validateHepler.getMess(store.data,name)){
            return (
                <Item error fixedLabel onPress={this.showDatePicker.bind(this)}>
                    <Label>{label}</Label>
                    <Input editable={false} placeholder={placeholder} value={value} placeholderTextColor='#b1b1b1'  onChangeText={txt => onChanged(name,txt)} />
                    <Icon name='close-circle' style={[this.style.leftMargin]} />
                </Item>
            )
        }else {
            return (
                <Item fixedLabel style={this.style.rightPadding} onPress={this.showDatePicker.bind(this)}>
                    <Label>{label}</Label>
                    <Input  editable={false} placeholder={placeholder} value={value} placeholderTextColor='#b1b1b1' onChangeText={txt => onChanged(name,txt)} />
                </Item>
            )
        }
    }
}

export default ValidateInputDate;