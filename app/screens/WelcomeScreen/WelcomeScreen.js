import React, { Component } from 'react';
import {
	View,
	Image
} from 'react-native';

import styles from './WelcomeScreenStyle';

import HugeText from 'pokedex-rn/app/components/HugeText';
import PrimaryBtn from 'pokedex-rn/app/components/PrimaryBtn';

export default class WelcomeScreen extends Component {	

	static navigationOptions = {
		header: null
	}
	
	render () {
		return (
			<View style={[styles.container, styles.justifySpaceEvenly]}>
				<Image
					style={styles.imageFill}
					source={require('pokedex-rn/assets/splash.png')}
				/>
				<View style={[styles.marginHorizontal, styles.marginVertical, styles.alignSelfCenter]}>
					<HugeText 
						text='POKEDEX'
						color='white'
					/>
				</View>
				<View style={[styles.marginHorizontal, styles.marginVertical]}>
					<PrimaryBtn 
						text='Iniciar sesión'
						color='white'
						backgroundColor='red'
						onPress={() => this.props.navigation.navigate('LoginScreen')}
					/>
				</View>
			</View>
		);
	}
}

