import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
	doubleBaseMargin: 32,
	baseMargin: 16,
	smallMargin: 8,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: (Platform.OS === 'ios') ? 64 : 79,
	buttonRadius: 5,
	icons: {
		small: 16,
		regular: 24,
		large: 48,
	},
	circleIcons: {
		huge: 60,
		big: 100,
	},
};

export default metrics;
