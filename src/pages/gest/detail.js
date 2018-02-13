import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Icon,Segment,Button,Text,ListItem} from 'native-base';
import Form from '../../components/form/DataContext'
import {ReadOnlyInput} from '../../components/form'

import {GestList,SortBar,SimpleGest} from '../../components'
import gestDetailStore from "../../stores/gest/gestDetail";

@observer
@inject('gestDetailStore')
export default class Detail extends Base{
    constructor(props){
        super(props);
        this.gestId=this.props.navigation.state.params.id;
    }
    gestId="";
    render(){
        return (<Container>
            <Content>
                <SimpleGest></SimpleGest>
                <Form store={this.store} style={{ borderWidth:1,borderColor:'#BBBBBB' }}>
                    <ListItem itemDivider>
                        <Text>基础信息</Text>
                    </ListItem>
                    <ReadOnlyInput label="等级" value={this.store.data.LevelName}></ReadOnlyInput>
                    <ReadOnlyInput label="性别" value={this.store.data.GestSex}></ReadOnlyInput>
                    <ReadOnlyInput label="生日" value={this.store.data.GestBirthday}></ReadOnlyInput>
                    <ReadOnlyInput label="邮件" value={this.store.data.EMail}></ReadOnlyInput>
                    <ReadOnlyInput label="VIP" value={this.store.data.IsVIP}></ReadOnlyInput>
                    <ReadOnlyInput label="余额" value={this.store.data.VIPAccount}></ReadOnlyInput>
                    <ReadOnlyInput label="预付金" value={this.store.data.PrepayMoney}></ReadOnlyInput>
                    <Text></Text>
                </Form>
                <Form store={this.store}>
                    <ListItem itemDivider>
                        <Text>宠物信息</Text>
                    </ListItem>
                </Form>
            </Content>
        </Container>);
    }
}