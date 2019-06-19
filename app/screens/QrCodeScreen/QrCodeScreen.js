import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import styles from './QrCodeScreenStyle';
import TrainerInfoContainer from 'pokedex-rn/app/containers/TrainerInfoContainer';

export default class QrCodeScreen extends Component {	
	
	render() {
		return (
			<View style={[styles.row, styles.justifyContentCenter, styles.baseMarginTop]}>
				<TrainerInfoContainer/>
			</View>
		);
	}
}
