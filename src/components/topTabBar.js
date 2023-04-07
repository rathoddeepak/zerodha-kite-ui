import React, {Component} from 'react';
import {View, Animated, Text, ScrollView} from 'react-native';
import helper from 'utils/helper';
import themes from 'themes';

const PER_CHARECTER_WIDTH = 9;
const TAB_PADDING = 20;
const TAB_PADDING_HORIZONTAL = TAB_PADDING * 2;
class TopTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [],
			currentActive: 0,
			translateX: new Animated.Value(0),
		};
	}

	setTabs = _tabs => {
		const tabs = [];
		const moveX = {
			inputRange: [],
			outputRange: [],
			extrapolate: 'clamp',
		};
		const resizeX = {
			inputRange: [],
			outputRange: [],
			extrapolate: 'clamp',
		};
		let i = 0;
		let width = 0;
		_tabs.forEach(t => {
			const len = t.title?.length || 0;
			t.width = len * PER_CHARECTER_WIDTH + TAB_PADDING_HORIZONTAL;
			moveX.inputRange.push(i);
			moveX.outputRange.push(width);
			resizeX.inputRange.push(i);
			// resizeX.outputRange.push((t.width / helper.width) * 100);
			resizeX.outputRange.push(t.width);
			tabs.push(t);
			i++;
			width += t.width;
		});
		const averageWidth = width / i;
		this.setState({
			averageWidth,
			tabs,
			moveX,
			resizeX,
		});
	};

	scrollIndicator = x => {
		this.state.translateX.setValue(x);
	};

	setIndex = x => {
		const xoffset = this.state.averageWidth * x;
		this.setState(
			{
				currentActive: x,
			},
			() => {
				this.state.translateX.setValue(x);
				setTimeout(() => {
					this.scrollView?.scrollTo({
						animated: true,
						duration: 300,
						x: xoffset,
						y: 0,
					});
				}, 100);
			},
		);
	};

	renderTabs = ({id, title, width}, index) => {
		const isActive = this.state.currentActive === index;
		const color = isActive ? themes.primary : themes.lightBrown;
		const fontWeight = isActive ? '500' : '300';
		return (
			<Text style={[style.tabTitle, {width, fontWeight, color}]} key={id}>
				{title}
			</Text>
		);
	};

	getScaleX = () => {
		const {tabs, translateX} = this.state;
		if (tabs.length === 0) {
			return translateX;
		}
		return translateX.interpolate(this.state.resizeX);
	};

	getTranslateX = () => {
		const {tabs, translateX} = this.state;
		if (tabs.length === 0) {
			return translateX;
		}
		return translateX.interpolate(this.state.moveX);
	};

	renderIndicator = () => {
		const scaleX = this.getScaleX();
		const translateX = this.getTranslateX();
		return (
			<Animated.View
				style={[
					style.indicator,
					{
						width: scaleX,
						transform: [{translateX}],
					},
				]}
			/>
		);
	};

	render() {
		const {tabs} = this.state;
		return (
			<ScrollView
				ref={ref => (this.scrollView = ref)}
				horizontal
				style={style.main}>
				{tabs.map(this.renderTabs)}
				{this.renderIndicator()}
			</ScrollView>
		);
	}
}

const style = {
	main: {
		width: helper.width,
		paddingHorizontal: helper.pointFiveWidth,
		height: 60,
		backgroundColor: themes.cement,
	},
	tabTitle: {
		textAlign: 'center',
		fontSize: 16,
		height: 50,
		paddingTop: 20,
	},
	indicator: {
		top: 57,
		position: 'absolute',
		height: 2,
		width: 5,
		backgroundColor: themes.primary,
	},
};

export default TopTabBar;