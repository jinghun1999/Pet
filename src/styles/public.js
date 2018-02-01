import {
    StyleSheet
} from 'react-native';

let Dimensions = require('Dimensions');
let { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
    },
    fullImage:{
        maxWidth:width,
    },
    fillRow:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    actions:{
        flex:1,
        marginRight:50,
        marginLeft:50
    },
    action:{
        marginBottom:10,
    },
    backImage:{

    }
});