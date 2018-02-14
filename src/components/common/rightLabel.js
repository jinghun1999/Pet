import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class RightLabel extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        let {label,style, txt,labelStyle,txtStyle} = this.props;
        if(!style){
            style={};
        }
        if(!(style instanceof Array)){
            style=[style];
        }

        if(!labelStyle){
            labelStyle={};
        }
        if(!(labelStyle instanceof Array)){
            labelStyle=[labelStyle];
        }

        if(!txtStyle){
            txtStyle={};
        }
        if(!(txtStyle instanceof Array)){
            txtStyle=[txtStyle];
        }

        return <View style={[{flexDirection:'row',alignItems:'center'},...style]}>
            <Text style={[{textAlign:'right',color:'#101010',fontSize:20},...txtStyle]}>{txt}</Text>
            <Text style={[{textAlign:'left',color:'#ABABAB',fontSize:18},...labelStyle]}>{label}</Text>
        </View>;
    }
}