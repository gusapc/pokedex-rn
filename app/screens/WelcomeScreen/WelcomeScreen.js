import React, { Component } from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import styles from './WelcomeScreenStyle';

export default class WelcomeScreen extends Component {	

	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View>
				<Text>WelcomeScreen</Text>
				<Button 
					onPress={() => this.props.navigation.navigate('LoginScreen')}
					title='go to LoginScreen'
					color='red'
				/> 
			</View>
		);

	}
}
