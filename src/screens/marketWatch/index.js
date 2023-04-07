import React, {Component} from 'react';
//React Components
import {View, ScrollView} from 'react-native';
//Custom Components
import MainHeader from 'components/header/main';
import TopTabBar from 'components/topTabBar';
import WatchList from './watchPager';
//Constants
import style from './style';
import helper from 'utils/helper';

export default class MarketWatch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [
				{
					id: 1,
					title: 'Tech',
				},
				{
					id: 2,
					title: 'Banking',
				},
				{
					id: 3,
					title: 'Networking',
				},
				{
					id: 4,
					title: 'Tech',
				},
				{
					id: 5,
					title: 'Banking',
				},
				{
					id: 6,
					title: 'Networking',
				},
			],
		};
	}

	componentDidMount() {
		this.topBar.setTabs(this.state.tabs);
	}

	handleScroll = x => {
		this.topBar.scrollIndicator(x / helper.width);
	};

	handleScrollEnd = x => {
		this.topBar.setIndex(x);
	};

	render() {
		const {tabs} = this.state;
		return (
			<View style={style.main}>
				<ScrollView stickyHeaderIndices={[1]}>
					<MainHeader title={'Marketwatch'} />
					<TopTabBar ref={ref => (this.topBar = ref)} />
					<WatchList
						onScroll={this.handleScroll}
						onScrollEnd={this.handleScrollEnd}
						tabs={tabs}
						ref={ref => (this.watchList = ref)}
					/>
				</ScrollView>
			</View>
		);
	}
}