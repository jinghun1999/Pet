import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import {Container,Content,Icon,Button} from 'native-base';

@inject('saleListStyle')
@observer
export default class SaleList extends Component{
    constructor(props){
        super(props);
        this.style=this.props.saleListStyle;
    }
    componentDidMount(){
    }
    style={};
    renderRow({item, index}){
        let {onPress} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>onPress(item)}>
                <View style={this.style.row}>
                    <View style={this.style.rowItem}>

                    </View>
                    <View style={this.style.rowItem}>
                    </View>
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
    onPress(item){
    }
    render(){
        let {collection,onPress} = this.props;
        return <View style={{flex:1}}>
            <FlatList data={collection.collection}
                      renderItem={this.renderRow.bind(this)}
                      onEndReachedThreshold={0.5}
                      ItemSeparatorComponent={this._separator.bind(this)}
                      getItemLayout={(data, index) => ( {length: 60, offset: (60 + 1) * index, index} )}
                      ListFooterComponent={this._renderFooter}
                      ListEmptyComponent={()=><View style={{height:100, justifyContent:'center', alignItems:'center'}}><Text style={{color:'gray'}}>暂无免疫提醒</Text></View>}
                      refreshing={collection.ladding}
                      onRefresh={()=>{
                          collection.onIni();
                      }}
                      onEndReached={()=>{
                          collection.onQuery();
                          return true;
                      }}
                      keyExtractor={(item,key) => key}>
            </FlatList>
        </View>
    }
}