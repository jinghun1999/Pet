import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import Base from '../base'
import {Container,Content} from 'native-base';
import {From,InputBase,InputText} from '../../components/form'
import addGestStore from "../../stores/gest/add";

@observer
@inject('addGestStore')
export default class Add extends Base{
    constructor(props){
        super(props);
        //this.gestId=this.props.navigation.state.params.id;
    }
    // gestId="";
    // buttons=[{
    //     title:'收银' ,
    //     style:{flex:1} ,
    //     onPress:()=>{}
    // },{
    //     title:'充值' ,
    //     default:true,
    //     style:{flex:1} ,
    //     onPress:()=>{}
    // }]
    render(){
        return (<Container>
            <Content>

            </Content>
        </Container>);
    }
}