import { StyleSheet } from 'react-native';
import { ApplicationStyles,Fonts, Colors } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	container: {
		flex: 1,
		backgroundColor: Colors.bgColor
	},
});
