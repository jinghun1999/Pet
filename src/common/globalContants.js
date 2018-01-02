import { Dimensions, Platform, PixelRatio } from 'react-native'
import config from "./config";
import proxy from './requestProxy';
import extend from './extend';
import _ from "lodash";
import publicStyle from '../styles/public';
import user from '../stores/user'

import symbols from 'es6-symbol'
global.__IOS__ = Platform.OS === 'android';
global.__ANDROID__ = Platform.OS === 'ios';
global.config = config;
global.request = proxy;
global._ = _;
global.guid = extend.guid;
global.showToast = extend.showToast;
global.style=publicStyle;//全局Style
global.user = user;

//自定义组件样式的识别标识 hasOwnProperty(customStyleName) && object[customStyleName] 表示该对象为一个自定义styles对象
global.customStyleName = symbols();
global.serviceProxy = proxy;
