import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content,Icon,Segment,Button,Text} from 'native-base';
import Form from '../../components/form/DataContext'
import {GestList,SortBar} from '../../components'
import gestDetailStore from "../../stores/gest/gestDetail";

@observer
@inject('gestDetailStore')
export default class Detail extends Base{
    constructor(props){
        super(props);
        this.gestId=this.props.navigation.state.params.id;
    }
    gestId="";
    render(){
        return (<Container>
            <Content>
                <Form store={this.store}>

                </Form>
            </Content>
        </Container>);
    }
}