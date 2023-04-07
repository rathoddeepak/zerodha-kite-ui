import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import WatchList from './watchList';
import helper from 'utils/helper';

export default class WatchPager extends Component {
	constructor(props) {
		super(props);
		this.watchList = [];
	}

	componentDidMount() {
		this.mountData(0);
	}

	renderTabs = (tab, index) => {
		return (
			<WatchList
				ref={ref => (this.watchList[index] = ref)}
				key={tab.id}
				data={tab}
			/>
		);
	};

	handleScroll = ({nativeEvent}) => {
		this.props?.onScroll(nativeEvent.contentOffset.x);
	};

	handleScrollEnd = ({nativeEvent}) => {
		const x = nativeEvent.contentOffset.x;
		const pageIndex = parseInt(x / helper.width, 10);
		this.props?.onScrollEnd(pageIndex);
		this.mountData(pageIndex);
	};

	mountData = (pageIndex) => {
		setTimeout(() => {
			this.watchList[pageIndex]?.onMount();
		}, 200);
	}

	render() {
		const {tabs} = this.props;
		return (
			<ScrollView
				showsScrollIndicator={false}
				decelerationRate={0.9}
				snapToInterval={helper.width}
				horizontal
				disableIntervalMomentum={true}
				onScroll={this.handleScroll}
				onMomentumScrollEnd={this.handleScrollEnd}
				overScrollMode="never"
				style={styles.pagerView}>
				{tabs.map(this.renderTabs)}
			</ScrollView>
		);
	}
}

const styles = {
	pagerView: {
		width: helper.width,
		height: helper.height,
	},
	page: {
		width: helper.width,
	},
};