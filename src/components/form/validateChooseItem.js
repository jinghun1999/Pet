import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, StyleSheet,TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from "./inputBase";
import validateHepler from "./validateHepler";

@inject('inputBaseStyle')
@observer
class ValidateChooseItem extends InputBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label,name, placeholder,store,options,optionslabel,...props} = this.props;
        let onChanged = store.onUpdate.bind(store);
        let onPress =() => {
            ActionSheet.show(
                {
                    options: options,
                    title: optionslabel,
                    cancelButtonIndex:-1
                },
                (index) => {
                    if( index >= 0 && index < options.length ){
                        onChanged(name,options[index].value);
                    }
                }
            )
        }
        let onGetTxt = (value)=>{
            let selectedOption = options.fristOne(item=>item.value==value);
            return selectedOption ? selectedOption.text:'';
        };
        let displayText = onGetTxt(store.data[name]);//显示的文本

        if(store.submited && validateHepler.getMess(store.data,name)){
            return (
                <Item error onPress={onPress} fixedLabel {...props}>
                    <Label>{label}</Label>
                    <Input editable={false} value={displayText} placeholder={placeholder} placeholderTextColor='#b1b1b1' />
                    <Icon style={this.style.ico} active name="ios-arrow-forward" />
                    <Icon name='close-circle' />
                </Item>
            )
        }else {
            return (
                <Item onPress={onPress} fixedLabel {...props}>
                    <Label>{label}</Label>
                    <Input editable={false} value={displayText} placeholder={placeholder} placeholderTextColor='#b1b1b1' />
                    <Icon style={this.style.ico} active name="ios-arrow-forward" />
                </Item>
            )
        }
    }
};

export default ValidateChooseItem;