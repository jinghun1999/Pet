import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

export default class LeftIcon extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        let {icon,style, txt,iconStyle,txtStyle} = this.props;
        if(!style){
            style={};
        }
        if(!(style instanceof Array)){
            style=[style];
        }

        if(!iconStyle){
            iconStyle={};
        }
        if(!(iconStyle instanceof Array)){
            iconStyle=[iconStyle];
        }

        if(!txtStyle){
            txtStyle={};
        }
        if(!(txtStyle instanceof Array)){
            txtStyle=[txtStyle];
        }

        return <View style={[{flexDirection:'row',alignItems:'center'},...style]}>
            <Icon name={icon}  style={[{textAlign:'right', marginRight:2, color:'#ABABAB'},...iconStyle]} />
            <Text style={[{textAlign:'left',color:'#101010'},...txtStyle]}>{txt}</Text>
        </View>;
    }
}