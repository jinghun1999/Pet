import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Icon,Segment,Button,Text,ListItem} from 'native-base';
import Card from '../../components/card/dataContext'
import {CardItem,CardHead,CardFooter} from '../../components/card'
import {GestList,SortBar,SimpleGest,PetCard,FootBar} from '../../components'
import gestDetailStore from "../../stores/gest/gestDetail";

@observer
@inject('gestDetailStore')
export default class Detail extends Base{
    constructor(props){
        super(props);
        this.gestId=this.props.navigation.state.params.id;
    }
    gestId="";
    buttons=[{
        title:'收银' ,
        style:{flex:1} ,
        onPress:()=>{}
    },{
        title:'充值' ,
        default:true,
        style:{flex:1} ,
        onPress:()=>{}
    }]

    onBalancePress(item){
        const { navigation } = this.props;
        navigation.navigate('Balance',{ id:this.gestId });
    }

    onPaymentPress(item){
        const { navigation } = this.props;
        navigation.navigate('Payment',{ id:this.gestId });
    }

    onSpendPress(item){
        const { navigation } = this.props;
        navigation.navigate('Spend',{ id:this.gestId });
    }

    render(){
        return (<Container>
            <Content>
                <SimpleGest></SimpleGest>
                <Card store={this.store}>
                    <CardHead label="会员信息" border={true} />
                    <CardItem label="性别：" name="GestSex" />
                    <CardItem label="生日：" name="GestBirthday" />
                    <CardItem label="邮件：" name="EMail" />
                    <CardItem label="VIP：" name="IsVIP" />
                    <CardItem label="余额：" name="VIPAccount"  onPress={this.onBalancePress.bind(this)} />
                    <CardItem label="预付金：" name="PrepayMoney" onPress={this.onPaymentPress.bind(this)} />
                    <CardItem label="累计消费：" name="PrepayMoney"  onPress={this.onSpendPress.bind(this)} />
                    <CardFooter label=""></CardFooter>
                </Card>
                <Card store={this.store}>
                    <CardHead label="宠物信息" />
                    {
                        this.store.pets.map((item,index)=><PetCard key={index} pet={item}></PetCard>)
                    }
                </Card>
            </Content>
            <FootBar buttons={this.buttons}></FootBar>
        </Container>);
    }
}