import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import {Container,Content,Icon,Segment,Button,Text,ListItem} from 'native-base';

@observer
//@inject('gestDetailStore')
export default class Cost extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<Container>
            <Content>
            </Content>
        </Container>);
    }
}