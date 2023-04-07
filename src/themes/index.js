import {StatusBar} from 'react-native';

const themes = {
	primary: '#4885E0',
	lightBrown: '#42404D',
	cement: '#EBECEE',
	white: '#FFFFFF',
	black24: '#242424',
	lightGrey: '#9C9CA4',
	borderColor: '#EFEFEF',
};

StatusBar.setBackgroundColor(themes.cement);
StatusBar.setBarStyle('dark-content');

export default themes;
