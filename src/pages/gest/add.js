import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content} from 'native-base';
import {FootBar} from '../../components'
import {From,InputText,InputTextIcon,InputChoose,InputDate,InputNumber} from '../../components/form'
import addGestStore from "../../stores/gest/add";

@inject('addGestStore')
@observer
export default class Add extends Base{
    constructor(props){
        super(props);

    }

    buttons=[{
        title:'提交',
        default:true,
        style:{flex:1} ,
        onPress:()=>{
            debugger;
            let warings = this.store.onValidate();
            if(warings && warings.length > 0 ){
                showToast( warings.join("\r\n"));
            }
        }
    }]
    componentWillMount(){

    }
    componentDidMount(){
        this.store.onIni();
    }
    render(){
        return (<Container>
            <Content>
                <From store={this.store}>
                    <InputTextIcon label="会员号" name="GestCode" placeholder="请输入会员号" icon="ios-qr-scanner"></InputTextIcon>
                    <InputText label="手机" name="MobilePhone" placeholder="请输入手机号"></InputText>
                    <InputText label="姓名" name="GestName" placeholder="请输入姓名"></InputText>
                    <InputChoose label="性别" name="GestSex" optionslabel="选择性别" options={this.store.SexTypes} placeholder="请输入性别"></InputChoose>
                    <InputDate label="生日" name="GestBirthday" placeholder="请输入生日"></InputDate>
                    <InputText label="邮件" name="EMail" placeholder="请输入邮件"></InputText>
                    <InputText label="地址" name="GestAddress" placeholder="请输入地址"></InputText>
                    <InputChoose label="状态" name="Status" optionslabel="选择状态" options={this.store.GestStatus} placeholder="请输入会员状态"></InputChoose>
                    <InputChoose label="会员等级" name="GestStyle" optionslabel="选择等级" options={this.store.Levels} placeholder="请输入会员等级"></InputChoose>
                    <InputNumber label="积分" name="RewardPoint" placeholder="请输入初始积分"></InputNumber>
                    <InputText label="备注" name="Remark" placeholder="请输入备注"></InputText>
                </From>
            </Content>
            <FootBar buttons={this.buttons}></FootBar>
        </Container>);
    }
}