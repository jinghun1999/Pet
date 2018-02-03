import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
import {observer, inject} from 'mobx-react/native'
import Swiper from 'react-native-swiper';
let {height, width} = Dimensions.get('window');

@observer
export default class SwiperBanner extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {items,height,barHeight} = this.props;
        let views = items.map((item,key) => (<View key={key} style={[styles.slide1,{width: width, height:height}]}>
            <Image source={item.image} style={{width: width, height:height - barHeight}} />
        </View>));

        return (
            <View style={{height:height}}>
                <Swiper style={styles.wrapper}
                        showsButtons={false}
                        paginationStyle={{bottom:5}}
                        activeDotColor={'#009688'}
                        autoplay={true}>
                    {views}
                </Swiper>
            </View>
        )
    }
}


let styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})