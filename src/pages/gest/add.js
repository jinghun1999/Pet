import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content} from 'native-base';
import {From,InputText,InputTextIcon,InputChoose} from '../../components/form'
import addGestStore from "../../stores/gest/add";

@observer
@inject('addGestStore')
export default class Add extends Base{
    constructor(props){
        super(props);
        this.store.onIni();
    }
    render(){
        let options=[
            {text:'男',value:'0'},
            {text:'女',value:'1'}];

        return (<Container>
            <Content>
                <From store={this.store}>
                    <InputTextIcon label="会员号" name="GestCode" placeholder="请输入会员号" icon="ios-qr-scanner"></InputTextIcon>
                    <InputText label="手机" name="MobilePhone" placeholder="请输入手机号"></InputText>
                    <InputText label="姓名" name="GestName" placeholder="请输入姓名"></InputText>
                    <InputChoose label="性别" name="GestSex" optionslabel="选择性别" options={options} placeholder="请输入性别"></InputChoose>
                    <InputText label="生日" name="GestBirthday" placeholder="请输入生日"></InputText>
                    <InputText label="邮件" name="EMail" placeholder="请输入邮件"></InputText>
                    <InputText label="地址" name="GestAddress" placeholder="请输入地址"></InputText>
                    <InputText label="备注" name="Remark" placeholder="请输入备注"></InputText>
                </From>
            </Content>
        </Container>);
    }
}