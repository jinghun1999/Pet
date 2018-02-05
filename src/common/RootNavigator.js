import React, { Component } from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import pages from '../pages';
import body from './TabNavigator'
import Icon from 'react-native-vector-icons/FontAwesome';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


const TransitionConfiguration = () => ({
    screenInterpolator: (sceneProps) => {
        const { scene } = sceneProps;
        const { route } = scene;
        const params = route.params || {};
        const transition = params.transition || 'forHorizontal';
        return CardStackStyleInterpolator[transition](sceneProps);
    },
});

const RootNavigator = StackNavigator({
    Welcome:{ screen: pages.welcomePage },
    Login:{screen:pages.login},
    Main:{ screen: body },
}, {
    initialRouteName: 'Welcome', // 默认显示界面!global.user.loginState?'Login':'Main'
    navigationOptions: {// 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerStyle:{elevation: 0,shadowOpacity: 0,height:0,backgroundColor:"#009688"},
        headerTitleStyle:{color:'#fff',fontSize:18,alignSelf:'center'}, //alignSelf:'center'  文字居中
        headerBackTitleStyle:{color:'#fff',fontSize:12},
        headerTintColor:'#fff',
        gesturesEnabled:true,//是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    transitionConfig: TransitionConfiguration,
    onTransitionStart: (Start)=>{console.log('导航栏切换开始');},  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});

export default RootNavigator;