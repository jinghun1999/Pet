import { Dimensions, Platform, PixelRatio } from 'react-native'
import config from "./config";
import proxy from './requestProxy';
import extend from './extend';
import _ from "lodash";
import publicStyle from '../styles/public';

global.__IOS__ = Platform.OS === 'android';
global.__ANDROID__ = Platform.OS === 'ios';
global.config = config;
global.request = proxy;
global._ = _;
global.guid = extend.guid;
global.showToast = extend.showToast;
global.style=publicStyle;//全局Style