import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from 'pokedex-rn/app/styles';
import {
	Dimensions
} from 'react-native';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	pokemonContainer:{
		height: Metrics.circleIcons.huge,
		alignItems: 'center',
		marginBottom: 16,
	},
	pokemonsGroup: {
		flex: 1,
		flexDirection: 'row',
		width: Metrics.screenWidth,
		justifyContent: 'space-evenly'
	}
});
