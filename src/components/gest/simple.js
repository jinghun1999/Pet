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
        return <Card>
            <CardItem>
                <Left>
                    <Icon name="ios-person"></Icon>
                    <Body>
                        <H2>汤姆</H2>
                        <Text note>1838272626652</Text>
                    </Body>
                </Left>
                <Right>
                    <TouchableOpacity>
                        <Text note>添加宠物</Text>
                    </TouchableOpacity>
                </Right>
            </CardItem>
        </Card>
    }
}