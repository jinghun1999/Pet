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
    render(){
        return (
            <Container>
                <Content>
                    <Form store={this.store}>



                    </Form>
                </Content>
            </Container>);
    }
}