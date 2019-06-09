import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import styles from './LoginScreenStyle';

export default function LoginScreen (props) {	
	return (
		<View>
			<Text>WelcomeScreen</Text>
			<Button 
				onPress={() => props.navigation.navigate('App')}
				title='go to app'
				color='red'
			/> 
		</View>
	);
}
