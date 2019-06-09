import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import styles from './HomeScreenStyle';

export default function HomeScreen (props) {
	
	return (
		<View>
			<Text>HomeScreen</Text>
			<Button 
				onPress={() => props.navigation.navigate('PokemonDetilsScreen')}
				title='go to PokemonDetilsScreen'
				color='red'
			/>
			<Button 
				onPress={() => props.navigation.navigate('FriendScanModal')}
				title='go to modal'
				color='red'
			/>
		</View>
	);
}
