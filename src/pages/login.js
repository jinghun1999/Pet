import React, {Component} from 'react';
import Base from './base'
import {observer, inject} from 'mobx-react/native';
import {IconInputText,FootBar} from '../components/form'
import Form from '../components/form/DataContext'
import { Container,Content,Button,Card,Text,Icon} from 'native-base';
import {Logo} from '../components'

import {
    View,
} from 'react-native'
import {NavigationActions} from "react-navigation";


@inject('loginStore','loginStyle')
export default class Login extends Base{
    constructor(props){
        super(props);
    }
    buttons=[];
    componentWillMount(){
        const { dispatch } = this.props.navigation;
        this.buttons.push({
            title:'登陆' ,
            default:true,
            onPress:()=>{
                this.store.onCommit(()=>{
                    //在重新获取用户配置信息的基础之上，打开主页
                    serviceProxy.Gload.GetConfig().then(function(o){
                        appParamter=o;
                        resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({routeName:'Main',params:{transition:'forVertical'}})//要跳转到的页面名字forVertical、forHorizontal
                            ]
                        });
                        dispatch(resetAction)
                    },function (err) {
                        showToast(err.mess);
                    });
                },err=>{
                    showToast(err.mess);
                });
            }
        });
        this.buttons.push({
            title:'忘记密码' ,
            onPress:()=>{}
        });
    }

    render(){
        return (
            <Container>
                <Content>
                <Logo />
                <View style={{flex:1, justifyContent:'center' , marginLeft:40,marginRight:40 }}>
                    <Form store={this.store}>
                        <IconInputText icoName="md-phone-portrait" label="手机" name="mobile" placeholder="请输入手机号"></IconInputText>
                        <IconInputText icoName="ios-lock" label="密码" name="password" placeholder="请输入密码"></IconInputText>
                    </Form>
                </View>
                <FootBar buttons={this.buttons} />
                </Content>
            </Container>
        );
    }
}