import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	background: {
		backgroundColor: Colors.red
	},
	mainContainer: {
		flexDirection: 'column',
		backgroundColor: Colors.red
	},
	avatar:{
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	},
	extraSpace : { height: '20%' }
});
