import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const pointFiveWidth = width * 0.05;
const width70 = width * 0.7;
const width90 = width * 0.9;

const helper = {
	height,
	width,
	pointFiveWidth,
	width90,
	width70,
};

export default helper;
