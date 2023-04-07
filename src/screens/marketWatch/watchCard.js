import React, {Component} from 'react';
import {View, Text} from 'react-native';
import themes from 'themes';

export default class WatchCard extends Component {
	render() {
		const {code, entity, currentPrice} = this.props.item;
		return (
			<View style={style.itemCover}>
				<View>
					<Text style={style.code}>{code}</Text>
					<Text style={style.entity}>{entity}</Text>
				</View>
				<Text style={style.price}>{currentPrice}</Text>
			</View>
		);
	}
}

const style = {
	itemCover: {
		height: 80,
		padding: 20,
		borderBottomWidth: 1,
		borderColor: themes.borderColor,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	code: {
		fontSize: 16,
		fontWeight: '400',
		color: themes.lightBrown,
		marginBottom: 5,
	},
	entity: {
		fontSize: 13,
		color: themes.lightGrey,
	},
	price: {
		fontSize: 16,
		color: themes.primary,
	},
};
