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
import {SortBar,SallSearchBar,SaleList} from '../../components'

@inject('saleListStore','saleListStyle')
@observer
export default class Home extends Base{
    constructor(props){
        super(props);
        this.store.onIni();
    }
    render(){
        list=this.store.data.list;
        return (<Container>
            <SortBar list={list}>
            </SortBar>
            <SallSearchBar></SallSearchBar>
            <SaleList collection={list} onPress={()=>{}}></SaleList>
        </Container>);
    }
}