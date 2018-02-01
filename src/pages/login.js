import React, {Component} from 'react';
import Base from './base'
import {observer, inject} from 'mobx-react/native';
import {IconInputText,FootBar} from '../components/form/native-base-validate'
import Form from '../components/form/DataContext'
import { Container,Content,Button,Card,Text,Icon} from 'native-base';
import {Logo} from '../components'

import {
    View,
} from 'react-native'


@inject('loginStore','loginStyle')
export default class Login extends Base{
    constructor(props){
        super(props);

    }
    buttons=[];
    componentWillMount(){
        this.buttons.push({
            title:'登陆' ,
            default:true,
            onPress:()=>{}
        });
        this.buttons.push({
            title:'忘记密码' ,
            onPress:()=>{}
        });
    }

    render(){
        return (
            <View style={{flex:1}}>
                <Logo />
                <View style={{flex:1, justifyContent:'center' , marginLeft:40,marginRight:40 }}>
                    <Form store={this.store}>
                        <IconInputText icoName="md-phone-portrait" label="手机" name="name" placeholder="请输入手机号"></IconInputText>
                        <IconInputText icoName="ios-lock" label="密码" name="mobile" placeholder="请输入密码"></IconInputText>
                    </Form>
                </View>
                <FootBar buttons={this.buttons} />
            </View>
        );
    }
}