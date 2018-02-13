import {
    StyleSheet
} from 'react-native';

class StyleCustom{
    static create(options){
        const style = StyleSheet.create(options)
        style[customStyleName]=true;
        return style;
    }
}

const homeStyle = StyleCustom.create({
    container:{
        flex:1,
    }
});

const welcomeStyle = StyleCustom.create({
    container:{
        flex:1,
        backgroundColor:'yellow'
    }
});

const loginStyle = StyleCustom.create({
    bg:{
    },
    action:{
        flex:1,
    }
});

const gestHomeStyle = StyleCustom.create({
    container:{
        flex:1
    },

    gestItem:{
        height:60,
        justifyContent:'center',
        marginLeft:20,
        marginRight:20
    },

    FristRow:{
        height:35,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    FristRowItem:{
        height:35,
        flexDirection:'row',
        alignItems:'center'
    },
    FristRowTxt:{
        color:'#2169D5',
        fontSize:18
    },
    FristRowIcon:{
        fontSize:21,
        color:'#BBBBBB',
        marginLeft:10,
        marginRight:10,
    },


    secondRow:{
        height:25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    secondRowItem:{
        height:22,
        flexDirection:'row',
        alignItems:'center'
    },

    secondRowItemIcon:{
        color:'#BBBBBB',
        fontSize:20
    },
    secondRowItemText:{
        color:'#9DC0F5',
        fontSize:16,
        marginLeft:5
    }
});

const gestSimpleStyle = StyleCustom.create({
    body:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'stretch'
    },
    sex:{
        width:150
    },
    name:{
        flex:1
    },
    actions:{
        width:200,
        justifyContent:'center'
    }
});

const inputBaseStyle=StyleCustom.create({
    rightPadding:{
        paddingRight:28
    },

    borderItem:{
        borderWidth:1,
    },

    ico:{
        width:28,
        color:'#b1b1b1',
        fontSize:14
    },
    titleIco:{
        color:'#009688',
        paddingRight:5
    },
    label:{
        width:55
    },
    radio:{
        fontSize:20,
        color:'#101010'
    },
    inputIcon:{
        color:'#2169d5',
        paddingRight:5
    }
});

export default {homeStyle,welcomeStyle,loginStyle,inputBaseStyle,gestHomeStyle,gestSimpleStyle}