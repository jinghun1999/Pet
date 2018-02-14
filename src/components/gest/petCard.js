import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {inject} from "mobx-react/native";
import {Icon} from 'native-base';
import LeftLabel from '../common/leftLabel'
import RightLabel from '../common/rightLabel'

@inject('petCardStyle')
export default class PetCard extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        let {pet,petCardStyle} = this.props;
        return <View style={petCardStyle.body}>
            <View style={petCardStyle.imageView}>
                <Image
                    style={petCardStyle.image}
                    resizeMode="contain"
                    source={require('../../resources/dog.png')} />
            </View>
            <View style={petCardStyle.info}>
                <View style={petCardStyle.row}>
                    <Text style={petCardStyle.name}>小黑</Text>
                    <Text style={petCardStyle.breed}>秋田犬</Text>
                </View>
                <View style={petCardStyle.row}>
                    <RightLabel style={{marginLeft:10}} label="月" txt="15" labelStyle={{color:'#ABABAB'}} txtStyle={{fontSize:18,color:'#2169D5'}}></RightLabel>
                    <LeftLabel style={{flex:1,justifyContent:'flex-end',marginRight:10}} label="生日：" txt="2017-01-09" labelStyle={{color:'#ABABAB'}} txtStyle={{fontSize:16}}></LeftLabel>
                </View>
            </View>
        </View>
    }
}