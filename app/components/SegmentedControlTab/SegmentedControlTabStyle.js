import { StyleSheet } from 'react-native';
import { Colors, Metrics } from 'pokedex-rn/app/styles';
import { ApplicationStyles } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	tabsConteiner: {
		width: '90%',
		alignSelf: 'center',
		borderRadius: 5,
		borderColor: Colors.red,
		borderWidth: 1
	},
	redButton: {
		backgroundColor: Colors.red,
	},
	whiteButton: {
		backgroundColor: Colors.white,	
	},
	buttonStyleLeft: {
		flex: 0.5,
		padding: Metrics.smallMargin,
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4
	},
	buttonStyleRight: {
		flex: 0.5,
		padding: Metrics.smallMargin,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4
	},
});

