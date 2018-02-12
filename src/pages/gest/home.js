import React, {Component} from 'react';
import {
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Icon,Segment,Button,Text} from 'native-base';
import gestHomeStore from "../../stores/gest/gestHome";
import Form from '../../components/form/DataContext'
import {InputQuery} from '../../components/form'
import {GestList,SortBar} from '../../components'

@observer
@inject('gestHomeStore','gestHomeStyle')
export default class GestHome extends Base{
    constructor(props){
        super(props);
    }
    onGestItemPress(item){


        const { navigation } = this.props;
        navigation.navigate('GestDetail',{ id:item.ID });


    }
    render(){
        list=this.store.data.list;
        return (<Container>
            <SortBar list={list}>
            </SortBar>
            <Content>
                <Form store={this.store}>
                    <InputQuery label="查询" placeholder="会员编号/名称/手机" name="qr"></InputQuery>
                    <GestList collection={list} onPress={this.onGestItemPress.bind(this)} />
                </Form>
            </Content>
        </Container>);
    }
}