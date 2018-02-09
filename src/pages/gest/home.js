import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Icon} from 'native-base';
import gestHomeStore from "../../stores/gest/gestHome";
import Form from '../../components/form/DataContext'
import {InputQuery} from '../../components/form'

@observer
@inject('gestHomeStore','gestHomeStyle')
export default class GestHome extends Base{
    constructor(props){
        super(props);
    }
    render(){
        return (<Container>
            <Content>
                <Form store={this.store}>
                    <InputQuery label="查询" placeholder="会员编号/名称/手机" name="qr"></InputQuery>
                </Form>
            </Content>
        </Container>);
    }
}