import { StyleSheet } from 'react-native';
import { Fonts, Colors, ApplicationStyles } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	spaceWidth: {
		width: '100%'
	}
});