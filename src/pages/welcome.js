import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Base from './base'
import {observer, inject} from 'mobx-react/native';
import {InputText} from '../components/form/native-base-validate'
import Form from '../components/form/DataContext'

@observer
@inject('welcomeStore','loginStore','welcomeStyle')
export default class Welcome extends Base{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.stores.loginStore.onLoadLocal(r=>{
            this.store.onEndLoading();
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