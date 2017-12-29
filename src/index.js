import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    BackHandler
} from 'react-native'
import { observable, action } from "mobx";
import { observer } from "mobx-react/native";
import RootNavigator from './common/RootNavigator';

@observer class TootTootApp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    routes = [];
    lastBackPressed = null;

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        this.lastBackPressed = null;
    }
    onBackAndroid() {
        if (this.routes.length <= 1) { // 根界面
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false;
            }
            this.lastBackPressed = Date.now();
            showToast('再按击一次退出养殖宝');
            return true;
        }
    }
    render() {
        return (
            <View style={style.container}>
                <RootNavigator onNavigationStateChange={(prevNav, nav, action) => {
                    console.log('prevNav=',prevNav);
                    console.log('nav=',nav);
                    console.log('action=',action);
                    this.routes = nav.routes;
                }} />
            </View>
        );
    }
}

export default TootTootApp;