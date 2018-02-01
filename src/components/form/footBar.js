import React, {Component} from 'react'
import {
    View,
    Image
} from 'react-native'
import {observer} from 'mobx-react/native';
import { Button,Text,Icon} from 'native-base';

@observer
export default class FootBar extends Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        buttons:[{ title:'提交' , default:true, onPress:()=>{}}]
    };
    renderButtons() {
        return this.props.buttons.map((button) => {
            if(button.default){
                return <View key={button.title} style={_style.action}>
                    <Button
                        onPress={button.onPress} primary full large>
                        <Text>{button.title}</Text>
                    </Button>
                </View>;
            } else {
                return <View key={button.title} style={_style.action}>
                    <Button
                         onPress={button.onPress} warning full large>
                        <Text>{button.title}</Text>
                    </Button>
                </View>;
            }
        });
    }
    render() {
        return (
            <View style={_style.container}>
                <View style={_style.actions}>
                {
                    this.renderButtons()
                }
                </View>
            </View>
        )
    }
}