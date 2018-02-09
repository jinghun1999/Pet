import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Icon} from 'native-base';
import gestHomeStore from "../../stores/gest/gestHome";

@observer
@inject('gestHomeStore','gestHomeStyle')
export default class GestHome extends Base{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={this.style.container}>
        </View>);
    }
}