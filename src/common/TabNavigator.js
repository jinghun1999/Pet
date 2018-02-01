import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import pages from '../pages'

//主菜单
const TabNavigation = TabNavigator({
    HomeTab: {
        screen: pages.homePage,
        navigationOptions:{
            headerVisible:true,
            headerTitle:'首页',
            tabBarLabel:'首页',
            tabBarIcon: ({tintColor}) => (<Icon name='home' color={tintColor} size={24}/>)
        }
    },
    Mine: {
        screen: pages.me,
        navigationOptions:{
            headerVisible:true,
            headerTitle:'我的',
            tabBarLabel:'我的',
            tabBarIcon: ({tintColor}) => (<Icon name='user' color={tintColor} size={24}/>)
        }
    },
}, {
    animationEnabled: false,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
        style: {
            height:49,
            paddingTop:0,
            backgroundColor:'#f1f9f7'
        },
        labelStyle:{
            marginTop:0,
            paddingTop:0
        },
        iconStyle:{
            marginTop:0,
            paddingTop:0,
        },
        activeBackgroundColor:'white',
        activeTintColor:'#009688',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#6f6f6f',
        showLabel:true,
        showIcon:true,
        indicatorStyle:{height:0}
    }
});

export default TabNavigation;