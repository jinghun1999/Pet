import React, {Component} from 'react';
import {
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Icon,Segment,Button,Text,ListItem} from 'native-base';
import {PaymentList} from '../../components'

@observer
@inject('paymentListStore')
export default class Balance extends Base{
    constructor(props){
        super(props);
        this.store.onIni(this.props.navigation.state.params.id);
    }
    render(){
        return (<Container>
            <Content>
                <PaymentList collection={this.store.data.list} onPress={()=>{}}></PaymentList>
            </Content>
        </Container>);
    }
}