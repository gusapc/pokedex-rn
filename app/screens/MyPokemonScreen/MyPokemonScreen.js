import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import styles from './MyPokemonScreenStyle';

export default function MyPokemonScreen (props) {	
	
	return (
		<View>
			<Text>MyPokemonScreen</Text>
			<Button 
			onPress={() => props.navigation.navigate('Auth')}
			title='go to Auth'
			color='red'
		/>
		</View>
	);
}
