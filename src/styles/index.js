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

export default {homeStyle,welcomeStyle}