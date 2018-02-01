import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import {DatePickerAndroid, StyleSheet,TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";
import InputBase from "./inputBase";
import validateHepler from "./validateHepler";

//inject
@observer
class ValidateRadioInput extends InputBase{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        let {data,name} = this.props;
        this.selectValue=data[name];
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
        return (<ValidRadioItem key={i} label={item.title} value={item.value} onChanged={this.onChanged.bind(this)} selectValue={this.selectValue}></ValidRadioItem>);
    }

    render(){
        let {data,name,options} = this.props;
        let errNode = camelCase( 'validateError',name );

        if(data["submited"] && data[errNode] && data[errNode] != null && data[errNode]!=""){
            return (
                <View>
                    {
                        options.map((item,i) => this.renderItem(item,i))
                    }
                </View>
            )
        }else {
            return (
                <View>
                    {
                        options.map((item,i) => this.renderItem(item,i))
                    }
                </View>
            )
        }
    }
}

export default ValidateRadioInput;