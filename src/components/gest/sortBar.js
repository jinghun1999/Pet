import React, {Component} from 'react';
import {
    View,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import {Container,Content,Icon,Segment,Button,Text} from 'native-base';

@observer
export default class SortBar extends Component{
    constructor(props){
        super(props);
    }
    renderFristButton(items,item,sortModel,onSwitchSort){
        if( items[sortModel].Key===item.Key ){
            return <Button key={item.Key} frist active onPress={()=>onSwitchSort(item.Key)}>
                <Text>{item.Title}</Text>
            </Button>
        }else{
            return <Button key={item.Key} frist onPress={()=>onSwitchSort(item.Key)}>
                <Text>{item.Title}</Text>
            </Button>
        }
    }
    renderLastButton(items,item,sortModel,onSwitchSort){
        if( items[sortModel].Key===item.Key ){
            return <Button key={item.Key} last active onPress={()=>onSwitchSort(item.Key)}>
                <Text>{item.Title}</Text>
            </Button>
        }else{
            return <Button key={item.Key} last onPress={()=>onSwitchSort(item.Key)}>
                <Text>{item.Title}</Text>
            </Button>
        }
    }
    renderButton(items,item,sortModel,onSwitchSort){
        if( items[sortModel].Key===item.Key ){
            return <Button key={item.Key} active onPress={()=>onSwitchSort(item.Key)}>
                <Text>{item.Title}</Text>
            </Button>
        }else{
            return <Button key={item.Key} onPress={()=>onSwitchSort(item.Key)}>
                <Text>{item.Title}</Text>
            </Button>
        }
    }
    render(){
        let {list} = this.props;
        let items = list.sortOptions;
        let sortModel = list.sortModel;
        let onSwitchSort = list.onSwitchSort.bind(list);
        return (<Segment style={{ paddingLeft:4 }}>
            {
                items.map((item,key)=>{
                    if( items[0].Key == item.Key ){
                        return this.renderFristButton(items,item,sortModel,onSwitchSort);
                    }else if(items[items.length-1].Key == item.Key){
                        return this.renderLastButton(items,item,sortModel,onSwitchSort);
                    }
                    else{
                        return this.renderButton(items,item,sortModel,onSwitchSort);
                    }
                })
            }
        </Segment>);
    }
}