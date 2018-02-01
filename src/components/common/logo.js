import React, { Component } from 'react'
import {
    View,
    Text,
    Image, StyleSheet
} from 'react-native';
import {inject, observer} from 'mobx-react/native';

export default class Logo extends Component
{
    render(){
        return(
            <View style={{alignItems:'center' }}>
                <Image
                    style={self.logoImage}
                    resizeMode="contain"
                    source={require('../../resources/login-logo.png')} />
                <Text style={self.logoTitle}>
                    旺财宠物
                </Text>
            </View>)
    }
}

let Dimensions = require('Dimensions');
let { width, height } = Dimensions.get('window');
let self = StyleSheet.create({
    logoImage:{
        maxWidth:width-200,
    },
    logoTitle:{
        fontSize:22,
        color:'#2169D5'
    },
});