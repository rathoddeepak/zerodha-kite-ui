import React from 'react';
//React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Components
import Icon from 'components/icon';
//Screens
import Screens from 'screens';
//Constants
import themes from 'themes';

const Tab = createBottomTabNavigator();
const Main = () => {
	const userName = 'TM1111';
	const screenOptions = ({route}) => ({
		headerShown: false,
		tabBarLabelStyle: {
			marginBottom: 5,
			marginTop: -5
		},
		tabBarStyle: {
			height: 55,
		},
		tabBarIcon: ({color, size}) => (
			<Icon name={route.name} size={21} color={color} />
		),
		tabBarActiveTintColor: themes.primary,
		tabBarInactiveTintColor: themes.lightBrown,
	});
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen name="Watchlist" component={Screens.MarketWatch} />
				<Tab.Screen name="Orders" component={Screens.Common} />
				<Tab.Screen name="Portfolio" component={Screens.Common} />
				<Tab.Screen name="Tools" component={Screens.Common} />
				<Tab.Screen name={userName} component={Screens.Common} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Main;
