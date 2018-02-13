import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {inject} from "mobx-react/native";

@inject('gestSimpleStyle')
export default class SimpleGest extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        let style = this.props.gestSimpleStyle;
        return <View style={[_style.container,style.body]}>
            <View style={style.sex}>

            </View>
            <View style={style.name}>

            </View>
            <View style={style.actions}>

            </View>
        </View>
    }
}