import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Spinner,ActionSheet} from 'native-base';
import {FootBar} from '../../components'
import {From,InputText,InputTextIcon,InputChoose,InputDate,InputNumber} from '../../components/form'
import addGestStore from "../../stores/gest/add";

@inject('addPetStore')
@observer
export default class AddPet extends Base{
    constructor(props){
        super(props);

    }
    buttons=[{
        title:'提交',
        default:true,
        style:{flex:1} ,
        onPress:()=>{
            let warings = this.store.onValidate();
            if(warings && warings.length > 0 ){
                showToast( warings.join("\r\n"));
                return;
            }
        }
    }]
    componentWillMount(){
    }
    componentDidMount(){
        this.store.onIni(this.props.navigation.state.params.id);
    }
    renderForm(){
        return <From store={this.store}>
            <InputTextIcon label="宠物号" name="PetCode" placeholder="请输入宠物号" icon="ios-qr-scanner"></InputTextIcon>
            <InputTextIcon label="牌号" name="DogBandID" placeholder="请输入宠物牌号" icon="ios-qr-scanner"></InputTextIcon>
            <InputText label="昵称" name="PetName" placeholder="请输入宠物昵称"></InputText>
            <InputDate label="生日" name="PetBirthday" placeholder="请输入宠物生日"></InputDate>
            <InputNumber label="年龄" name="Age" placeholder="请输入宠物年龄"></InputNumber>
            <InputChoose label="种类" name="MdicTypeName" placeholder="请输入宠物种类" optionslabel="选择种类" options={this.store.Races} onChanged={this.store.onRacesChanged.bind(this.store)}></InputChoose>

            <InputChoose label="品种" name="PetBreed" placeholder="请输入宠物品种" optionslabel="选择品种" options={this.store.Breeds}></InputChoose>

            <InputChoose label="颜色" name="PetSkinColor" placeholder="请输入宠物颜色" optionslabel="选择宠物颜色" options={this.store.Colors}></InputChoose>
            <InputText label="病历号" name="SickFileCode" placeholder="请输入宠物病历号"></InputText>
            <InputChoose label="绝育状态" name="BirthStatus" placeholder="请输入绝育状态" optionslabel="选择绝育状态" options={this.store.BirthStatus}></InputChoose>
            <InputChoose label="状态" name="Status" placeholder="请输入宠物状态" optionslabel="选择宠物状态" options={this.store.Status}></InputChoose>
            <InputText label="备注" name="Remark" placeholder="请输入宠物备注"></InputText>
        </From>;
    }
    renderSpinner(){
        return <Spinner />
    }
    renderBody(){
        if(!this.store.loadding){
            return this.renderForm();
        }else{
            return this.renderSpinner();
        }
    }
    renderFooter(){

        if(!this.store.loadding){
            return <FootBar buttons={this.buttons}></FootBar>;
        }else{
            return null;
        }
    }
    render(){
        return (<Container>
            <Content>
                {
                    this.renderBody()
                }
            </Content>
            {
                this.renderFooter()
            }
        </Container>);
    }
}