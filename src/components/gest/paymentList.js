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
import LeftLabel from '../common/leftLabel'

@inject('balanceStyle')
@observer
export default class PaymentList extends Component{
    constructor(props){
        super(props);
        this.style=this.props.balanceStyle;
    }
    componentDidMount(){
    }
    renderRow({item, index}){
        let {onPress} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>onPress(item)} style={this.style.listRow}>
                <View style={this.style.fristRow}>
                    <Text>{item.OprationType}</Text>
                    <Text>{item.OptionDate.ToDate().Format("yyyy-MM-dd")}</Text>
                </View>
                <View style={this.style.secondRow}>
                    <LeftLabel label="经手人:" txt={item.ModifiedBy}></LeftLabel>
                    <Text>{item.TotalMoney}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    _separator=()=>{
        return <View style={{ height: 1, backgroundColor: '#e2e2e2' }}/>;
    }
    _renderFooter(){
        return <View />;
    }
    onPress(item){
    }
    render(){
        let {collection,onPress} = this.props;
        return <View style={{flex:1}}>
            <FlatList data={collection.list}
                      renderItem={this.renderRow.bind(this)}
                      onEndReachedThreshold={0.5}
                      ItemSeparatorComponent={this._separator.bind(this)}
                      getItemLayout={(data, index) => ( {length: 60, offset: (60 + 1) * index, index} )}
                      ListFooterComponent={this._renderFooter}
                      ListEmptyComponent={()=><View style={{height:100, justifyContent:'center', alignItems:'center'}}><Text style={{color:'gray'}}>暂无余额明细</Text></View>}
                      refreshing={this.props.collection.ladding}
                      onRefresh={()=>{
                          this.props.collection.onIni();
                      }}
                      onEndReached={()=>{
                          this.props.collection.onQuery();
                          return true;
                      }}
                      keyExtractor={(item,key) => key}>
            </FlatList></View>
    }
}