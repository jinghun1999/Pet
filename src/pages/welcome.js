import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Base from './base'
import Icon from 'react-native-vector-icons/FontAwesome';
import {observer, inject} from 'mobx-react/native';
import homeStore from "../stores/home";

@inject('homeStore','welcomeStyle')
@observer
export default class Welcome extends Base{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={this.style.container}>
            <Text>{this.store.title}</Text>
        </View>);
    }
}