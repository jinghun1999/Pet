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
        const mess = this.store.onValidate();
        if(mess && mess.length > 0){
        }else{
        }
    }

    render(){
        const onPress = this.onPress.bind(this);
        return (
            <Container>
                <Content>
                    <Form store={this.store}>
                        <InputText label="姓名" name="name" placeholder="请输入姓名"></InputText>
                        <InputText label="手机" name="mobile" placeholder="请输入手机"></InputText>
                        <Button onPress={onPress}>
                            <Text>Click Me! </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>);
    }
}