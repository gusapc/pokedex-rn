import React from 'react';
import { Text, View } from 'react-native';
import HelloWorld from 'pokedex-rn/app/components/HelloWorld';

import styles from './ExampleScreenStyle';

export default function ExampleScreen (props) {
	return (
		<View style={styles.container}>
			<HelloWorld />
		</View>
	);
}
