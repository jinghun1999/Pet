import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, StyleSheet,TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from "./inputBase";
import validateHepler from "./validateHepler";

@observer
class ValidateChooseItem extends InputBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label, data , name ,getOptions,selectOptions,optionslabel,IsValidate, placeholder,onChange,...props} = this.props;

        let onPress =() => {
            let options = getOptions?getOptions():[];
            if(selectOptions){
                selectOptions.forEach(o=> options.push(o));
            }
            ActionSheet.show(
                {
                    options: options,
                    title: optionslabel,
                    cancelButtonIndex:-1
                },
                (index) => {
                    if( index >= 0 && index < options.length ){
                        onChange(options[index]);
                    }
                }
            )
        }
        if(IsValidate && validateHepler.getMess(data,name)){
            return (
                <Item error onPress={onPress} fixedLabel {...props}>
                    <Label>{label}</Label>
                    <Input editable={false} value={data[name]} placeholder={placeholder} placeholderTextColor='#b1b1b1' />
                    <Icon style={this.style.ico} active name="ios-arrow-forward" />
                    <Icon name='close-circle' />
                </Item>
            )
        }else {
            return (
                <Item onPress={onPress} fixedLabel {...props}>
                    <Label>{label}</Label>
                    <Input editable={false} value={data[name]} placeholder={placeholder} placeholderTextColor='#b1b1b1' />
                    <Icon style={this.style.ico} active name="ios-arrow-forward" />
                </Item>
            )
        }
    }
};

export default ValidateChooseItem;