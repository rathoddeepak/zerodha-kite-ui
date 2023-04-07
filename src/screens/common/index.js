import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from "./style";

export default class MarketWatch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <View style={style.main}><Text>Hello</Text></View>;
	}
}