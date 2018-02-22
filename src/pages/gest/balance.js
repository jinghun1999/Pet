import React, {Component} from 'react';
import {
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Icon,Segment,Button,Text,ListItem} from 'native-base';
import {BalanceList} from '../../components'

@observer
@inject('balanceStore')
export default class Balance extends Base{
    constructor(props){
        super(props);
        this.store.onIni(this.props.navigation.state.params.id);
    }
    render(){
        return (<Container>
            <Content>
                <BalanceList collection={this.store.data.list} onPress={()=>{}}></BalanceList>
            </Content>
        </Container>);
    }
}