import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import {Container,Content,Icon} from 'native-base';

@observer
export default class GestList extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    renderRow = ({item, index}) =>{
        return (
                <TouchableOpacity activeOpacity={0.5} style={{height:44}}>
                    <View>
                        <Text>{item.GestName}</Text>
                    </View>
                    <View>

                    </View>
                </TouchableOpacity>
        );
    }
    _separator=()=>{
        return <View style={{ height: 1, backgroundColor: '#e2e2e2' }}/>;
    }
    _renderFooter(){
        return <View />
    }
    render(){
        return <View style={{flex:1,backgroundColor:'red'}}>
            <FlatList data={this.props.collection.list}
                      renderItem={this.renderRow}
                      onEndReachedThreshold={0.5}
                      ItemSeparatorComponent={this._separator}
                      getItemLayout={(data, index) => ( {length: 44, offset: (44 + 1) * index, index} )}
                      ListFooterComponent={this._renderFooter}
                      ListEmptyComponent={()=><View style={{height:100, justifyContent:'center', alignItems:'center'}}><Text style={{color:'gray'}}>暂无免疫提醒</Text></View>}
                      refreshing={this.props.collection.ladding}
                      onEndReached={()=>{
                          this.props.collection.onQuery();
                          return true;
                      }}
                      keyExtractor={(item,key) => key}>
            </FlatList></View>
    }
}