/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import TootToot from './src';
import stores from './src/stores';
import { Root } from 'native-base';
import {Provider} from 'mobx-react/native';
import extend from './src/common/globalContants';
import styles from './src/styles';

export default class App extends Component<{}> {
  render() {
      let items = {...stores,...styles};
    return (
        <Root>
            <View style={_style.container}>
                <Provider {...items}>
                    <TootToot />
                </Provider>
            </View>
        </Root>
    );
  }
}