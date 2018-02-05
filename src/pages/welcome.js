import React, {Component} from 'react';
import Base from './base'
import {observer, inject} from 'mobx-react/native';
import {InputText} from '../components/form/native-base-validate'
import Form from '../components/form/DataContext'
import { Container,Header, Content,Text,Spinner} from 'native-base';

@observer
@inject('welcomeStore','loginStore','welcomeStyle')
export default class Welcome extends Base{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.stores.loginStore.onLoadLocal(r=>{
            this.store.onEndLoading();
        });
    }
    render(){
        let { loading } = this.store;
        return (
            <Container>
                <Content>
                    {
                        loading?<Spinner color="blue"></Spinner>:<Text>旺财宠物</Text>
                    }
                </Content>
            </Container>);
    }
}