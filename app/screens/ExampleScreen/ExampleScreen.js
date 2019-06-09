import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HelloWorld from 'pokedex-rn/app/components/HelloWorld';

import styles from './ExampleScreenStyle';

export default class ExampleScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<HelloWorld />
			</View>
		);
	}
}
