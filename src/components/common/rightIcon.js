import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

export default class RightIcon extends Component{
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
            <Text style={[{textAlign:'left',color:'#101010'},...txtStyle]}>{txt}</Text>
            <Icon name={icon}  style={[{textAlign:'right', marginLeft:2, color:'#ABABAB'},...iconStyle]} />
        </View>;
    }
}