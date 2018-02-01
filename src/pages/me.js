import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Base from './base'
import {Icon} from 'native-base';

export default class Me extends Base{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={{flex:1}}>
            <Text>我的信息</Text>
        </View>);
    }
}