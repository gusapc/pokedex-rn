import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	iconContent: {
		marginLeft: '3%',
		marginRight: '3%'
	},
	mainContainer: {
		width: '90%',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	textArrow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '90%',
	},
	divider: {
		width: '95%',
		marginTop: Metrics.baseMargin,
		marginLeft: '4%'
	},
	img: {
		height: '100%', width: '10%'
	}
});