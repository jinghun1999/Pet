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
        let url = require('../../resources/dog.png');
        return <View style={petCardStyle.body}>
            <View style={petCardStyle.imageView}>
                        <Image
                        style={petCardStyle.image}
                        resizeMode="contain"
                        source={url} />
            </View>
            <View style={petCardStyle.info}>
                <View style={petCardStyle.row}>
                    <Text style={petCardStyle.name}>{pet.PetName}</Text>
                    <Text style={petCardStyle.breed}>{pet.PetBreed}</Text>
                </View>
                <View style={petCardStyle.row}>
                    {
                        pet.Age?<RightLabel style={{marginLeft:10}} label="日" txt={pet.Age} labelStyle={{color:'#ABABAB'}} txtStyle={{fontSize:18,color:'#2169D5'}}></RightLabel>:null
                    }
                    <LeftLabel style={{flex:1,justifyContent:'flex-end',marginRight:10}} label="生日：" txt={pet.PetBirthday.ToDate().Format("yyyy-MM-dd")} labelStyle={{color:'#ABABAB'}} txtStyle={{fontSize:16}}></LeftLabel>
                </View>
            </View>
        </View>
    }
}