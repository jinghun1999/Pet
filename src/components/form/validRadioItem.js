import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, StyleSheet,TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from "./inputBase";
import validateHepler from "./validateHepler";

//inject
@observer
class ValidRadioItem extends InputBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label, value ,selectValue, onChanged} = this.props;
        let icon = value == selectValue ? "md-radio-button-on":"md-radio-button-off";
        return (
            <ListItem fixedLabel style={this.style.rightPadding} onPress={()=>{
                onChanged(value)
            }}>
                <Label style={this.style.label}>{label}</Label>
                <Right>
                    <Icon name={icon} style={this.style.radio} />
                </Right>
            </ListItem>);
    }
}

export default ValidRadioItem;