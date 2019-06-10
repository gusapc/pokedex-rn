import { StyleSheet } from 'react-native';
import { Colors } from 'pokedex-rn/app/styles';
import { ApplicationStyles } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	mainContainer: {
		flexDirection: 'column',
		backgroundColor: Colors.white
	},
	avatar:{
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	},
});