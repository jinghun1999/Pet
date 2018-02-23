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
import RightIcon from '../common/rightIcon'

@inject('spendStyle')
@observer
export default class SpendList extends Component{
    constructor(props){
        super(props);
        this.style=this.props.spendStyle;
    }
    componentDidMount(){
    }
    renderRow({item, index}){
        let {onPress} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>onPress(item)} style={this.style.listRow}>
                <View style={this.style.left}>
                    <View style={this.style.fristRow}>
                        <Text>{item.SettleCode}</Text>
                        <Text>{item.PaidTime.ToDate().Format("yyyy-MM-dd")}</Text>
                    </View>
                    <View style={this.style.secondRow}>
                        <LeftLabel label="收银:" txt={item.CreatedBy}></LeftLabel>
                        <RightIcon icon="ios-cash" txt={item.FactPaidMoney} iconStyle={{fontSize:18}}></RightIcon>
                    </View>
                </View>
                <View style={this.style.right}>
                    <Icon name="ios-arrow-forward" style={this.style.icon}></Icon>
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