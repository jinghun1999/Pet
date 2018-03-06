import React, {Component} from 'react';
import {
    View,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class Left extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={{flex:1, flexDirection:'row', alignItems:'center',justifyContent:'flex-start'}} {...this.props}>
            {this.props.children}
        </View>);
    }
}
class Center extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={{flex:3, flexDirection:'row' ,alignItems:'center',justifyContent:'center'}} {...this.props}>
            {this.props.children}
        </View>);
    }
}
class Right extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',justifyContent:'flex-end'}} {...this.props}>
            {this.props.children}
        </View>);
    }
}
class Row extends Component{
    constructor(props){
        super(props);
        let {style,Border} = this.props;
        if(!style){
            style={};
        }
        if(!(style instanceof Array)){
            style=[style];
        }
        //this.StyleContainer=style;
        this.StyleContainer=[{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center', paddingLeft:10,paddingRight:10 }];
        if(Border){
            this.StyleContainer.push(this.bottom);
        }
        this.StyleContainer=[...this.StyleContainer,...style];
    }
    StyleContainer=[];
    bottom={
        borderBottomWidth:1,
        borderBottomColor:'#888888'
    }
    runderAction(){
        var {style ,onPress, ...other} = this.props;
        return <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={onPress}>
            <View style={this.StyleContainer} {...other}>
                {this.props.children}
            </View>
        </TouchableOpacity>;
    }
    runderView(){
        var {style , ...other} = this.props;
        return (<View style={this.StyleContainer} {...other}>
            {this.props.children}
        </View>);
    }
    render(){
        let {onPress} = this.props;
        if( onPress ){
            return this.runderAction();
        }else{
            return this.runderView();
        }
    }
}
export default {Row,Left,Center,Right};