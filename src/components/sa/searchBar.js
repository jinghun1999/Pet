import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import {Icon} from 'native-base';
import {ViewBar,Left,Center,Rigth} from '../common/viewBar'

@observer
export default class SearchBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <View style={{ backgroundColor:'#BEC2C9', flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:5,paddingBottom:5, paddingRight:5,paddingLeft:5}}>
            <ViewBar onPress={()=>{
                alert("打开日期选择页面");
            }}>
                <Center>
                    <Text>2018-03-06</Text>
                    <Text>2018-03-29</Text>
                </Center>
                <Rigth>
                    <Icon name="ios-arrow-forward" style={{ fontSize:12,color:'#FFFFFF' }}></Icon>
                </Rigth>
            </ViewBar>
            <ViewBar onPress={()=>{}} LeftBorder={true}>
                <Center>
                    <Text>销售总额</Text>
                    <Text>200.00(元)</Text>
                </Center>
                <Rigth>
                    <Icon name="ios-arrow-forward" style={{ fontSize:12,color:'#FFFFFF' }}></Icon>
                </Rigth>
            </ViewBar>
            <ViewBar onPress={()=>{}} LeftBorder={true}>
                <Center>
                    <Text>单据数</Text>
                    <Text>20</Text>
                </Center>
                <Rigth>
                    <Icon name="ios-arrow-forward" style={{ fontSize:12,color:'#FFFFFF' }}></Icon>
                </Rigth>
            </ViewBar>
        </View>;
    }
}