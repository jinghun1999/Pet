import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {inject} from "mobx-react/native";
import {Icon} from 'native-base';

@inject('gestSimpleStyle')
export default class SimpleGest extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        let style = this.props.gestSimpleStyle;
        return <View style={[style.body]}>
            <View style={style.sexView}>
                <TouchableOpacity>
                    <Icon name="ios-call" style={style.sex}></Icon>
                </TouchableOpacity>
            </View>
            <View style={style.nameView}>
                <View style={style.name}><Text style={style.nameTxt}>汤姆</Text></View>
                <View style={style.phone}>
                    <Text style={style.phoneTxt}>182829383828</Text>
                </View>
            </View>
            <TouchableOpacity style={style.actionsView}>
                <Icon name="ios-paper-outline" style={style.costIcon} />
            </TouchableOpacity>
        </View>
    }
}