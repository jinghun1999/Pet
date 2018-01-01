import React, {Component} from 'react';
import Base from './base'
import {observer, inject} from 'mobx-react/native';
import {InputText} from '../components/form/native-base-validate'
import Form from '../components/form/DataContext'
import { Container,Header, Content,Separator,Icon,Root,ListItem,Text,Toast} from 'native-base';

@inject('homeStore','welcomeStyle')
@observer
export default class Welcome extends Base{
    constructor(props){
        super(props);
    }
    render(){
        const onChangedHandler = (name,value) => this.store.update(name,value);
        return (
            <Container>
                <Content>
                    <Form data={this.store.data} onChanged={onChangedHandler}>
                        <InputText label="姓名" name="name" placeholder="请输入姓名"></InputText>
                        <InputText label="手机" name="mobile" placeholder="请输入手机"></InputText>
                    </Form>
                </Content>
            </Container>);
    }
}