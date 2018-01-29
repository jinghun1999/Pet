import React, {Component} from 'react';
import Base from './base'
import {observer, inject} from 'mobx-react/native';
import {InputText} from '../components/form/native-base-validate'
import Form from '../components/form/DataContext'
import { Container,Header, Content,Separator,Icon,Root,ListItem,Text,Button,Toast} from 'native-base';

@inject('loginStore','loginStyle')
export default class Welcome extends Base{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container>
                <Content>
                    <Form store={this.store}>
                        <InputText label="手机" name="name" placeholder="请输入手机号"></InputText>
                        <InputText label="密码" name="mobile" placeholder="请输入手机"></InputText>
                    </Form>
                </Content>
            </Container>);
    }
}