import React, { Component } from 'react'
import {
    View,
    Text,
    Image, StyleSheet
} from 'react-native';
import {inject, observer} from 'mobx-react/native';
import {Icon} from 'native-base';

export default class QuickMenus extends Component
{
    render(){
        return(
            <View style={_style.fillColumn}>
                <View style={_style.fillRow}>

                </View>
                <View style={_style.fillRow}>
                </View>
                <View style={_style.fillRow}>
                </View>
            </View>)
    }
}

let styles = StyleSheet.create({
    row:{

    }
})