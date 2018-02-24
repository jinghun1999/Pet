import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content} from 'native-base';
import {From,InputText,RadioInput} from '../../components/form'
import addGestStore from "../../stores/gest/add";

@observer
@inject('addGestStore')
export default class Add extends Base{
    constructor(props){
        super(props);
        this.store.onIni();
    }
    render(){
        return (<Container>
            <Content>
                <From store={this.store}>
                    <InputText label="手机" name="MobilePhone" placeholder="请输入手机号"></InputText>
                    <InputText label="姓名" name="GestName" placeholder="请输入姓名"></InputText>
                    <RadioInput label="性别" name="GestSex" options={[{title:'男',value:'0'},{title:'女',value:'1'}]} placeholder="请输入性别"></RadioInput>
                    <InputText label="生日" name="GestBirthday" placeholder="请输入生日"></InputText>
                    <InputText label="邮件" name="EMail" placeholder="请输入邮件"></InputText>
                    <InputText label="地址" name="GestAddress" placeholder="请输入地址"></InputText>
                    <InputText label="备注" name="Remark" placeholder="请输入备注"></InputText>
                </From>
            </Content>
        </Container>);
    }
}