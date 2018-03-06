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
        return (<View style={{flex:1,alignItems:'center',justifyContent:'center'}} {...this.props}>
            {this.props.children}
        </View>);
    }
}
class Center extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={{flex:3,alignItems:'center',justifyContent:'center'}} {...this.props}>
            {this.props.children}
        </View>);
    }
}
class Rigth extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<View style={{flex:1,alignItems:'center',justifyContent:'center'}} {...this.props}>
            {this.props.children}
        </View>);
    }
}
class ViewBar extends Component{
    constructor(props){
        super(props);

        let {style,LeftBorder} = this.props;
        if(!style){
            style={};
        }
        if(!(style instanceof Array)){
            style=[style];
        }
        this.StyleContainer=style;
        this.StyleContainer=[{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}];
        if(LeftBorder){
            this.StyleContainer.push(this.left);
        }
        this.StyleContainer=[...this.StyleContainer,...style];
    }
    StyleContainer=[];
    left={
        borderLeftWidth:1,
        borderLeftColor:'#888888'
    }
    runderAction(){
        let {onPress} = this.props;

        return <TouchableOpacity style={{flex:1,flexDirection:'row'}} onPress={onPress}>
            <View style={[...this.StyleContainer]} {...this.props}>
                {this.props.children}
            </View>
        </TouchableOpacity>;
    }
    runderView(){
        return (<View  style={[...this.StyleContainer]} {...this.props}>
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
export {ViewBar,Left,Center,Rigth};