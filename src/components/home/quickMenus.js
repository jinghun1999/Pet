import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {inject, observer} from 'mobx-react/native';
import {Icon} from 'native-base';

export default class QuickMenus extends Component
{
    constructor(props){
        super(props);
    }
    menus=[{
        iconName:'ios-cash',
        title:'收银',
        onHandler:()=>{}
    },{
        iconName:'ios-person-add',
        title:'增加会员',
        onHandler:()=>{}
    },{
        iconName:'ios-card',
        title:'会员充值',
        onHandler:()=>{}
    },{
        iconName:'ios-archive',
        title:'商品入库',
        onHandler:()=>{}
    },{
        iconName:'ios-calculator',
        title:'库存盘点',
        onHandler:()=>{}
    },{
        iconName:'ios-mail',
        title:'短信',
        onHandler:()=>{}
    },{
        iconName:'ios-stats',
        title:'报表',
        onHandler:()=>{}
    },{
        iconName:'ios-more-outline',
        title:'更多',
        onHandler:()=>{}
    },{
        iconName:'',
        title:'',
        onHandler:()=>{

        }
    },{
        iconName:'',
        title:'',
        onHandler:()=>{

        }
    },{
        iconName:'',
        title:'',
        onHandler:()=>{

        }
    }];

    renderBar(item,key){
        if(!item.iconName){
            return (<View style={[styles.barMenu]} key={key}>
            </View>);
        }else{
            return (<View style={[styles.barMenu]} key={key}>
                <Icon name={item.iconName} style={styles.barIcon}></Icon>
                <Text style={styles.barText}>{item.title}</Text>
            </View>);
        }
    }

    renderRow(index,items){
        if( items==null || items.length == 0 ){
            return (<View style={[styles.barRow]}></View>);
        }
        let rowSize = 3;
        let start = (index - 1) * rowSize;
        let end = start + (rowSize-1);
        let rowItems = items.slice(start,end + 1);//slice 函数实际的获取元素范围为（start , end - 1），所以必须给end + 1，才能保证end被取出来


        return (<View style={[styles.barRow]}>
            {
                rowItems.map((item,key)=> this.renderBar(item,key))
            }
        </View>);
    }

    render(){

        return(
            <View style={[_style.fillColumn]}>
                {
                    this.renderRow(1,this.menus)
                }
                {
                    this.renderRow(2,this.menus)
                }
                {
                    this.renderRow(3,this.menus)
                }
            </View>)
    }
}

let styles = StyleSheet.create({
    row:{
    },
    border:{
        borderWidth:1,
        borderColor:'#F4F5F2'
    },
    barMenu:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#F4F5F2'
    },
    barIcon:{
        color:'#8FB4EB',
        fontSize:32
    },
    barText:{
        color:'#BBBBBB',
        fontSize:18
    },
    barRow:{
        flex:1,
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'center'
    }
})