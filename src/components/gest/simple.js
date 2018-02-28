import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import {inject} from "mobx-react/native";
import {Card,CardItem,Left,Right,Body,Text,H2, Icon} from 'native-base';

export default class SimpleGest extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        let {name,mobile,sex,onPress}=this.props;
        return <Card>
            <CardItem>
                <Left>
                    {
                        sex=="男"?<Icon name="ios-person"></Icon>:<Icon name="ios-woman"></Icon>
                    }
                    <Body>
                        <H2>{name}</H2>
                        <Text note>{mobile}</Text>
                    </Body>
                </Left>
                <Right>
                    <TouchableOpacity onPress={onPress}>
                        <Text note>添加宠物</Text>
                    </TouchableOpacity>
                </Right>
            </CardItem>
        </Card>
    }
}