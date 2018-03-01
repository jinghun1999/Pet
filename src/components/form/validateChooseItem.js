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
        let {label,name, placeholder,store,options,optionslabel,onChanged,...props} = this.props;
        let onPress =() => {

            if(options.length==0){
                return;
            }
            let items=[];
            options.forEach(item => items.push(item));
            ActionSheet.show(
                {
                    options: items,
                    title: optionslabel,
                    cancelButtonIndex:-1
                },
                (index) => {
                    if( index >= 0 && index < options.length ){
                        if(!onChanged){
                            onChanged=store.onUpdate.bind(store);
                            onChanged(name,options[index].value);
                        }else{
                            onChanged(name,options[index]);
                        }
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
                    <Icon style={[this.style.ico,this.style.leftMargin]} active name="ios-arrow-forward" />
                </Item>
            )
        }
    }
};

export default ValidateChooseItem;