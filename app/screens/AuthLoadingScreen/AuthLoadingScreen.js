import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	View,
	Image
} from 'react-native';
import styles from './AuthLoadingScreenStyle';
import { getAuthData } from "pokedex-rn/app/reducers";

export default function AuthLoadingScreen (props) {

	useEffect(() => {
		_bootstrapAsync();
	}, []);

	const authData = useSelector(getAuthData);
	async function _bootstrapAsync () {
		props.navigation.navigate(authData.loggedIn? 'App':'Auth');
	}

	return (
		<View style={styles.container}>
			<Image 
				style={styles.imageFill}
				source={require('pokedex-rn/assets/splash.png')}/>
		</View>
	);
}