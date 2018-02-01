import {Component} from "react";
import {observer, inject} from 'mobx-react/native';

export default class InputBase extends Component{
    constructor(props){
        super(props);
        for(let o in this.props){
            if(!this.props[o]) continue;
            if( this.props[o].hasOwnProperty(customStyleName) && this.props[o][customStyleName] ){
                this.style = this.props[o];
            }
        }
    }
    style={};
}