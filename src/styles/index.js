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
        alignItems:'stretch',
        height:80,
        backgroundColor:'#F4F5F2'
    },
    sexView:{
        width:80,
        justifyContent:'center',
        alignItems:'center'
    },
    sex:{
        fontSize:45,
        color:'#2169D5'
    },
    nameView:{
        flex:1,
    },
    name:{
        justifyContent:'center',
        flex:1,
    },
    nameTxt:{
        fontSize:25,
        color:'#2169D5',
    },
    phone:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },

    phoneIcon:{
        fontSize:25,
        color:'#2169D5',
        marginLeft:2,
        marginRight:2
    },

    phoneTxt:{
        fontSize:18,
        color:'#808069',
    },

    actionsView:{
        width:80,
        justifyContent:'center',
        alignItems:'center'
    },
    costTxt:{
        fontSize:12,
        color:'#808069',
    },
    costIcon:{
        fontSize:50,
        color:'#2169D5',
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