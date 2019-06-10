import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from 'pokedex-rn/app/styles';


export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	iconLabel: {
		width: '32%'
	},
	container: {
		height: Metrics.navBarHeight * 0.8,
		width: '100%',
		backgroundColor: Colors.red
	}
});
