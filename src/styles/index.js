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

const inputBaseStyle=StyleCustom.create({
    rightPadding:{
        paddingRight:28
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
    }
});

export default {homeStyle,welcomeStyle,loginStyle,inputBaseStyle}