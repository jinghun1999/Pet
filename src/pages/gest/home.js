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
    renderRow = ({item, index}) =>{
        return (
            <TouchableOpacity activeOpacity={0.5} style={this.style.gestItem}>
                <View style={this.style.FristRow}>
                    <View style={this.style.FristRowItem}>
                        <Text style={this.style.FristRowTxt}>{item.GestName}(15882982712)</Text>
                    </View>
                    <View style={this.style.FristRowItem}>
                        <Icon name="logo-yen" style={[this.style.FristRowIcon]} />
                        <Text style={this.style.FristRowTxt}>20000</Text>
                    </View>
                </View>
                <View style={this.style.secondRow}>
                    <View style={this.style.secondRowItem}>
                        <Icon name="ios-paw" style={this.style.secondRowItemIcon} />
                        <Text style={this.style.secondRowItemText}>5</Text>
                    </View>
                    <View style={this.style.secondRowItem}>
                        <Icon name="ios-ribbon" style={this.style.secondRowItemIcon} />
                        <Text style={this.style.secondRowItemText}>金卡</Text>
                    </View>
                    <View style={this.style.secondRowItem}>
                        <Icon name="ios-cash" style={this.style.secondRowItemIcon} />
                        <Text style={this.style.secondRowItemText}>5</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render(){
        list=this.store.data.list;
        return (<Container>
            <SortBar list={list}>
            </SortBar>
            <Content>
                <Form store={this.store}>
                    <InputQuery label="查询" placeholder="会员编号/名称/手机" name="qr"></InputQuery>
                    <GestList collection={list} />
                </Form>
            </Content>
        </Container>);
    }
}