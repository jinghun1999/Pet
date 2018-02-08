import React, { Component } from 'react'
import {
    View,
    Text,
    Image, StyleSheet
} from 'react-native';
import {inject, observer} from 'mobx-react/native';
import {Icon} from 'native-base';

export default class Summary extends Component
{
    render(){
        return(
            <View style={{flexDirection:'row',height:80, backgroundColor:'#F4F5F2',alignItems:'center',justifyContent:'center'}}>
                <View style={_style.fillCenterColumn}>
                    <Text style={_style.font1}>今日销售</Text>
                    <View style={_style.autoRow}>
                        <Text style={_style.font1}>{appParamter.Sale}</Text>
                        <Icon name="logo-yen" style={_style.icon1}></Icon>
                    </View>
                </View>
                <View style={_style.fillCenterColumn}>
                    <Text style={_style.font1}>今日充值</Text>
                    <View style={_style.autoRow}>
                        <Text style={_style.font1}>{appParamter.Recharge}</Text>
                        <Icon name="logo-yen" style={_style.icon1}></Icon>
                    </View>
                </View>
                <View style={_style.fillCenterColumn}>
                    <Text style={_style.font1}>今日增加会员</Text>
                    <View style={_style.autoRow}>
                        <Text style={_style.font1}>{appParamter.IncreaseMember}</Text>
                        <Icon name="ios-people" style={_style.icon1}></Icon>
                    </View>
                </View>
            </View>)
    }
}