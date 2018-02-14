/**
 * Created by TomChow on 17/11/16.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {Container, Content, Footer, FooterTab, Button,Text} from 'native-base';
import {observer} from 'mobx-react/native';

@observer
export default class FootBar extends Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        buttons:[{ title:'提交' , default:true, onPress:()=>{}}]
    };

    renderButtons() {
        list=[];
        return this.props.buttons.map((button) => {

            style=button.style;
            if( !style ){
                style={};
            }
            if(!(style instanceof Array)){
                style=[style];
            }

            txtStyle=button.txtStyle;
            if( !txtStyle ){
                txtStyle={};
            }
            if(!(txtStyle instanceof Array)){
                txtStyle=[txtStyle];
            }

            if(button.default){
                return <Button key={button.title} style={[...style]} primary full large onPress={button.onPress}>
                    <Text style={[{color:'#FFFFFF'},...txtStyle]}>{button.title}</Text>
                </Button>;
            }else{
                return <Button key={button.title} style={[...style]} full large onPress={button.onPress}>
                    <Text style={[{color:'#2169D5'},...txtStyle]}>{button.title}</Text>
                </Button>;
            }
        });
    }

    render() {
        return (
            <Footer>
                <FooterTab style={{backgroundColor:'#BEC2C9',borderColor:'#BBBBBB',borderTopWidth:1}}>
                    {
                        this.renderButtons()
                    }
                </FooterTab>
            </Footer>
        )
    }
}