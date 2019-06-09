import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics } from 'pokedex-rn/app/styles';

export default StyleSheet.create({
  	avatarHuge: {
		width: Metrics.circleIcons.huge,
		height: Metrics.circleIcons.huge,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.huge/2 : Metrics.circleIcons.huge	
	},
	avatarBig: {
		width: Metrics.circleIcons.big,
		height: Metrics.circleIcons.big,	
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.big/2 : Metrics.circleIcons.big,
		borderColor: Colors.black,
		borderWidth: 1
	}
});
