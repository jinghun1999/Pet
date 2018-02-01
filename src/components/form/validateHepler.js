import React, {Component} from 'react';
import {Item, Input,Icon,Label,ActionSheet,Text,Right,Radio,ListItem} from 'native-base';
import {inject, observer} from 'mobx-react/native';
import camelCase from 'camelcase';
import {DatePickerAndroid, StyleSheet,TouchableOpacity,View} from "react-native";
import {observable,action} from "mobx";

class validateHepler {
    static getMess(dataitem,name){
        let mess=[];
        let errNode = camelCase( 'validateError',name );
        let printErrNode = camelCase('validateItem',name);
        if( dataitem[errNode] && dataitem[errNode] != null && dataitem[errNode]!=""  ){
            mess.push(dataitem[errNode]);
        }
        if( dataitem[printErrNode] && dataitem[printErrNode] != null && dataitem[printErrNode]!=""  ){
            mess.push(dataitem[printErrNode]);
        }
        return mess.length > 0;
    }
}

export default validateHepler;