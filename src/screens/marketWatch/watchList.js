import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import helper from 'utils/helper';
import themes from 'themes';
import Icon from 'components/icon';
import WatchCard from './watchCard';
import stockList from './stocks.json';

export default class WatchList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			stocks: [],
			stockCount: 0,
			allowedCount: 50,
		};
		this.watchCard = [];
	}

	onMount = () => {
		if (this.state.stocks.length === 0) {
			setTimeout(() => {
				this.setState({
					loading: false,
					stocks: stockList,
				});
			}, 300);
		}
	};

	renderHeader = () => {
		const {stockCount, allowedCount} = this.state;
		return (
			<View style={style.header}>
				<View style={style.headerBorder} />
				<View style={style.searchBar}>
					<Icon
						style={style.searchIcon}
						name={'Search'}
						color={themes.lightGrey}
						size={18}
					/>
					<Text style={style.searchTxt}>Search & add</Text>
					<Text style={style.searchBarCount}>
						{stockCount}/{allowedCount}
					</Text>
					<View style={style.verticalLine} />
					<Icon
						style={style.searchIcon}
						name={'Setting'}
						color={themes.lightGrey}
						size={18}
					/>
				</View>
			</View>
		);
	};

	renderItem = ({item, index}) => {
		return <WatchCard item={item} ref={ref => (this.watchCard[index] = ref)} />;
	};

	renderFooter = () => {
		if (this.state.loading) {
			return (
				<View style={style.loadingContainer}>
					<ActivityIndicator size={30} color={themes.primary} />
				</View>
			);
		}
	};

	render() {
		const {stocks} = this.state;
		return (
			<FlatList
				ListHeaderComponent={this.renderHeader}
				renderItem={this.renderItem}
				data={stocks}
				nestedScrollEnabled
				ListFooterComponent={this.renderFooter}
				contentContainerStyle={style.flatList}
			/>
		);
	}
}

const style = {
	flatList: {
		minHeight: helper.height,
		width: helper.width,
		backgroundColor: themes.white,
	},
	header: {
		width: helper.width,
		backgroundColor: themes.cement,
		height: 70,
		alignItems: 'center',
	},
	searchBar: {
		width: helper.width90,
		backgroundColor: themes.white,
		height: 45,
		elevation: 20,
		borderRadius: 5,
		shadowColor: themes.black24,
		top: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},
	searchTxt: {
		fontSize: 15,
		flex: 1,
		color: themes.lightGrey,
	},
	searchBarCount: {
		fontSize: 15,
		color: themes.lightGrey,
	},
	verticalLine: {
		backgroundColor: themes.lightGrey,
		width: 1,
		height: 30,
		marginLeft: 10,
	},
	searchIcon: {
		marginHorizontal: 10,
	},
	loadingContainer: {
		height: 300,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerBorder: {
		height: 30,
		position: 'absolute',
		bottom: 0,
		width: helper.width,
		backgroundColor: themes.white,
		borderTopLeftRadius: 14,
		borderTopRightRadius: 14,
	},
};