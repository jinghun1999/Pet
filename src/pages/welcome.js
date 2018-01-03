import React, {Component} from 'react';
import Base from './base'
import {observer, inject} from 'mobx-react/native';
import {InputText} from '../components/form/native-base-validate'
import Form from '../components/form/DataContext'
import { Container,Header, Content,Separator,Icon,Root,ListItem,Text,Button,Toast} from 'native-base';

@inject('homeStore','welcomeStyle')
export default class Welcome extends Base{
    constructor(props){
        super(props);
    }

    onPress(){
        //this.store.login();

        this.store.addItem();
    }

    onLogin(){
        this.store.login();
    }

    render(){
        const onPress = this.onPress.bind(this);
        const onLogin = this.onLogin.bind(this);

        return (
            <Container>
                <Content>
                    <Form store={this.store}>
                        <InputText label="姓名" name="name" placeholder="请输入姓名"></InputText>
                        <InputText label="手机" name="mobile" placeholder="请输入手机"></InputText>

                        <Button onPress={onLogin}>
                            <Text>Login</Text>
                        </Button>

                        <Button onPress={onPress}>
                            <Text>Click Me! </Text>
                        </Button>

                    </Form>
                </Content>
            </Container>);
    }
}