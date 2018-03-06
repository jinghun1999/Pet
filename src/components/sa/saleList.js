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
import R from '../common/rowView'

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
        let {Row,Left,Right,Center} = R;

        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>onPress(item)}>
                <Row style={{height:30}}>
                    <Left>
                        <Text style={this.style.GestTxt}>张三</Text>
                    </Left>
                    <Right>
                        <Icon name="ios-calendar-outline"  style={this.style.YangIco} />
                        <Text>2017-09-01</Text>
                    </Right>
                </Row>
                <Row style={{height:30}}>
                    <Left>
                        <Icon name="logo-yen" style={this.style.YangIco}></Icon>
                        <Text>200</Text>
                    </Left>
                    <Center>
                        <Icon name="md-person" style={this.style.YangIco}></Icon>
                        <Text>店长</Text>
                    </Center>
                    <Right>
                        <Text>已结算</Text>
                    </Right>
                </Row>
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