import { StyleSheet, StatusBar, Platform } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	above: {
		zIndex: 5
	}
});
