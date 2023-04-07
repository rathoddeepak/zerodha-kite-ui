import React, {PureComponent} from 'react';
import {Image} from 'react-native';
import Home from 'assets/icons/home.png';
import Orders from 'assets/icons/orders.png';
import Portfolio from 'assets/icons/portfolio.png';
import Tools from 'assets/icons/tools.png';
import User from 'assets/icons/user.png';
import ArrowDown from 'assets/icons/arrowDown.png';
import Setting from 'assets/icons/setting.png';
import Search from 'assets/icons/search.png';

const getSource = name => {
	switch (name) {
		case 'Home':
		case 'Watchlist':
			return Home;
		case 'Orders':
			return Orders;
		case 'Portfolio':
			return Portfolio;
		case 'Tools':
			return Tools;
		case 'ArrowDown':
			return ArrowDown;
		case 'Setting':
			return Setting;
		case 'Search':
			return Search;
		default:
			return User;
	}
};

class Icon extends PureComponent {
	render() {
		const {size, color, name, style = {}} = this.props;
		const source = getSource(name);
		return (
			<Image
				style={{width: size, height: size, tintColor: color, ...style}}
				source={source}
			/>
		);
	}
}

export default Icon;