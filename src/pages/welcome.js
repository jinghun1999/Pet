import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Base from './base'
import {observer, inject} from 'mobx-react/native';
import {InputText} from '../components/form/index'
import Form from '../components/form/DataContext'
import {NavigationActions} from "react-navigation";

@observer
@inject('welcomeStore','loginStore','welcomeStyle')
export default class Welcome extends Base{
    constructor(props){
        super(props);
    }
    static navigationOptions = ({navigation})=>({
        header:null
    });
    componentDidMount(){
        this.stores.loginStore.onLoadLocal(r=>{
            this.readyApp(this.props.navigation,this.stores.loginStore);
        });
    }
    readyApp(navigation,loginStore){
        serviceProxy.onReady(navigation,loginStore);
        serviceProxy.Gload.GetConfig().then(function(o){
            appParamter=o;
            const { dispatch } = navigation;
            resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName:'Main',params:{transition:'forVertical'}})
                ]
            });
            dispatch(resetAction)
        },function (err) {
            showToast(err.mess);
        });
    }
    render(){
        let { loading } = this.store;
        return (
            <View style={{ flex:1,alignItems:'stretch'}}>
                <View style={self.imageView}>
                    <Image
                        style={self.welcomeImage}
                        resizeMode="contain"
                        source={require('../resources/welcome.png')} />
                </View>
                <View style={self.logView}>
                    <Image
                        style={self.logoImage}
                        resizeMode="contain"
                        source={require('../resources/logo-small.png')} />
                    <Text style={self.title}>旺财宠物</Text>
                </View>
            </View>);
    }
}

let Dimensions = require('Dimensions');
let { width, height } = Dimensions.get('window');
let self = StyleSheet.create({
    imageView:{
    },
    welcomeImage:{
        width:width,
    },
    logoImage:{
        width:40
    },
    logView:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#8BC34A',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        marginLeft:20,
        fontSize:22,
        color:'#ffffff',
    }
});