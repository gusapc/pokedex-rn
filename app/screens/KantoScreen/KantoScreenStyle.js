import { StyleSheet } from 'react-native';
import { ApplicationStyles} from 'pokedex-rn/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	bottomMargin: {
		marginBottom: 1
	}
});
