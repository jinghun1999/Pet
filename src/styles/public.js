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
        alignItems:'center',
        justifyContent:'center'
    },
    autoRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    fillColumn:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    fillCenterColumn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    font1:{
        color:'#2169D5',
        fontSize:16
    },

    icon1:{
        color:'#2169D5',
        fontSize:20
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