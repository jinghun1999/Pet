import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Base from './base'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Base{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={{flex:1}}>
            <Icon name="ios-basket" />
            <Text>这里是首页</Text>
        </View>);
    }
}