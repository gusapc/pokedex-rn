import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './HelloWorldStyle';

export default class HelloWorld extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Greetings!</Text>
			</View>
		);
	}
}

HelloWorld.propTypes = {
	// data: PropTypes.array
}

HelloWorld.defaultProps = {
	// data: []
}
