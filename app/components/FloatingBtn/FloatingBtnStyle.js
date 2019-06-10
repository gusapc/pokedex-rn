import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	circle: { 
		backgroundColor: Colors.red,
		justifyContent: 'center',
		alignItems: 'center',
		width: 60,
		height: 60,
		borderRadius: 35,
		position: 'absolute',
		bottom: 15,
		right: 15,
		zIndex: 10
	},
});