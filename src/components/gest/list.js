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

@inject('gestHomeStyle')
@observer
export default class GestList extends Component{
    constructor(props){
        super(props);
        this.style=this.props.gestHomeStyle;
    }
    componentDidMount(){
    }
    style={};
    renderRow({item, index}){
        let {onPress} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5} style={this.style.gestItem} onPress={()=>onPress(item)}>
                <View style={this.style.FristRow}>
                    <View style={this.style.FristRowItem}>
                        <Text style={this.style.FristRowTxt}>{item.GestName}(15882982712)</Text>
                    </View>
                    <View style={this.style.FristRowItem}>
                        <Icon name="logo-yen" style={[this.style.FristRowIcon]} />
                        <Text style={this.style.FristRowTxt}>20000</Text>
                    </View>
                </View>
                <View style={this.style.secondRow}>
                    <View style={this.style.secondRowItem}>
                        <Icon name="ios-paw" style={this.style.secondRowItemIcon} />
                        <Text style={this.style.secondRowItemText}>5</Text>
                    </View>
                    <View style={this.style.secondRowItem}>
                        <Icon name="ios-ribbon" style={this.style.secondRowItemIcon} />
                        <Text style={this.style.secondRowItemText}>金卡</Text>
                    </View>
                    <View style={this.style.secondRowItem}>
                        <Icon name="ios-cash" style={this.style.secondRowItemIcon} />
                        <Text style={this.style.secondRowItemText}>5</Text>
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
            <FlatList data={collection.list}
                      renderItem={this.renderRow.bind(this)}
                      onEndReachedThreshold={0.5}
                      ItemSeparatorComponent={this._separator.bind(this)}
                      getItemLayout={(data, index) => ( {length: 60, offset: (60 + 1) * index, index} )}
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