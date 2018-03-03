import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Icon,Segment,Button,Text,ListItem} from 'native-base';
import {SpendList} from '../../components'

@observer
@inject('spendStore')
export default class Spend extends Base{
    constructor(props){
        super(props);
        this.store.onIni(this.props.navigation.state.params.id);
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: "消费",
        headerRight: <View></View>
    });
    render(){
        return (<Container>
            <Content>
                <SpendList  collection={this.store.data.list} onPress={()=>{}}></SpendList>
            </Content>
        </Container>);
    }
}