import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import styles from './MyPokemonScreenStyle';
import TeamListContainer from 'pokedex-rn/app/containers/TeamListContainer';
export default class MyPokemonScreen extends Component {	
	render() {
		return (
			<View style={styles.smallPaddingTop}>		
				<TeamListContainer/>
			</View>			
		);
	}
}
