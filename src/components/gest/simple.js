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
                <Icon name="md-woman" style={style.sex}></Icon>
            </View>
            <View style={style.nameView}>
                <View style={style.name}><Text style={style.nameTxt}>汤姆</Text></View>
                <TouchableOpacity style={style.phone}>
                    <Icon name="ios-call" style={style.phoneIcon}></Icon>
                    <Text style={style.phoneTxt}>182829383828</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.actionsView}>
                <Icon name="ios-list" style={style.costIcon} />
                <Text style={style.costTxt}>费用</Text>
            </TouchableOpacity>
        </View>
    }
}