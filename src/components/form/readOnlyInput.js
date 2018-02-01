import React, {Component} from 'react';
import {Item, Input,Label,Text,} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {observable,action} from "mobx";
import validateHepler from "./validateHepler";
import InputBase from "./inputBase";

@observer
class ReadOnlyInput extends InputBase{
    constructor(props){
        super(props);
    }
    render(){
        let {label,value} = this.props;
        return (
            <Item fixedLabel style={this.style.rightPadding}>
                <Label>{label}</Label>
                <Input value={value} editable={false} placeholderTextColor='#b1b1b1' />
            </Item>
        )
    }
};

export default ReadOnlyInput;