import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	extraSpace: { height: 100 },
	textInputStyle: {
		color: Colors.black,
		fontSize: Fonts.size.regular,
		borderColor: 'transparent',
		padding: 5,
		width: '100%',
		zIndex: 1
    }
});
