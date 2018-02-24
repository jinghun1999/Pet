import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, StyleSheet,TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from "./inputBase";
import validateHepler from "./validateHepler";
import RadioItem from './validRadioItem'

@inject('inputBaseStyle')
@observer
class ValidateRadioInput extends InputBase{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        let {label,name, placeholder,store} = this.props;
        this.selectValue=store.data[name];
    }

    @observable
    selectValue="";

    @action
    onChanged(value){
        this.selectValue=value;
        let {onChanged} = this.props;
        if(onChanged){
            onChanged(value);
        }
    }

    renderItem(item,i){
        return (<RadioItem key={i} label={item.title} value={item.value} onChanged={this.onChanged.bind(this)} selectValue={this.selectValue}></RadioItem>);
    }

    render(){
        let {label,name, placeholder,store,options} = this.props;
        let onChanged = store.onUpdate.bind(store);
        if(store.submited && validateHepler.getMess(store.data,name)){
            return (
                <Item error fixedLabel>
                    {
                        options.map((item,i) => this.renderItem(item,i))
                    }
                </Item>
            )
        }else {
            return (
                <Item fixedLabel style={this.style.rightPadding}>
                    <Label>{label}</Label>
                    <View style={{flex:1}}>
                    {
                        options.map((item,i) => this.renderItem(item,i))
                    }
                    </View>
                </Item>
            )
        }
        // let {label,name, placeholder,store,options} = this.props;
        // let {data,name,options} = this.props;
        // let errNode = camelCase( 'validateError',name );
        //
        // if(data["submited"] && data[errNode] && data[errNode] != null && data[errNode]!=""){
        //     return (
        //         <View>
        //             {
        //                 options.map((item,i) => this.renderItem(item,i))
        //             }
        //         </View>
        //     )
        // }else {
        //     return (
        //         <View>
        //             {
        //                 options.map((item,i) => this.renderItem(item,i))
        //             }
        //         </View>
        //     )
        // }
    }
}

export default ValidateRadioInput;