import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from './base'
import {Icon} from 'native-base';
import {SwiperBanner,Summary,QuickMenus} from '../components'

@observer
export default class Home extends Base{
    constructor(props){
        super(props);
        this.items.push({id:'1',image:require('../resources/banner_home_1.jpg'),title:'北京将在年底举行第三次全国宠物医生交流大会'});
        this.items.push({id:'2',image:require('../resources/banner_home_2.jpg'),title:'中国将在2017年底实现动物医学教育正规化'});
        this.items.push({id:'3',image:require('../resources/banner_home_3.jpg'),title:'中国将在2017年底实现动物医学教育正规化'});
    }

    items = [];

    render(){
        return (<View style={{flex:1}}>
            <SwiperBanner items={this.items} height={145} barHeight={25}></SwiperBanner>
            <Summary></Summary>
            <QuickMenus></QuickMenus>
        </View>);
    }
}