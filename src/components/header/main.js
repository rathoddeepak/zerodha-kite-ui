import React, {Component} from 'react';
import {View, Text, Animated} from 'react-native';
import Icon from '../icon';
import PropTypes from 'prop-types';
import helper from 'utils/helper';
import themes from 'themes';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class MainHeader extends Component {
	render() {
		const {title} = this.props;
		return (
			<View style={style.mainRow}>
				<Text numberOfLines={1} style={style.title}>
					{title}
				</Text>
				<AnimatedIcon name="ArrowDown" color={themes.lightBrown} size={20} />
			</View>
		);
	}
}

MainHeader.defaultProps = {
	title: '',
};
MainHeader.propTypes = {
	title: PropTypes.string,
};
const style = {
	mainRow: {
		width: helper.width,
		paddingHorizontal: helper.pointFiveWidth,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 70
	},
	title: {
		fontSize: 25,
		color: themes.lightBrown,
		fontWeight: '500',
		width: helper.width70,
	},
};