import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from './base'
import {Icon} from 'native-base';

@observer
export default class Home extends Component{


    constructor(props){
        super(props);
    }
    render(){
        return (<View style={{flex:1}}>
            <Text>这里是首页1</Text>
        </View>);
    }
}