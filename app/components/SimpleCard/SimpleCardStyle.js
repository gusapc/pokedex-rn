import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	card: {
		...ApplicationStyles.screen.card,
		paddingVertical: Metrics.baseMargin,
		marginHorizontal: Metrics.baseMargin,
	},
	noPaddingHorizontal: {
		paddingHorizontal: Metrics.baseMargin
	}
});