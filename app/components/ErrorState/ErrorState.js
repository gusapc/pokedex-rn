import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ErrorStateStyle';

export default class ErrorState extends Component {
	render() {
		return (
			<View>
				<Text>ErrorState</Text>
			</View>
		);
	}
}

	ErrorState.propTypes = {
		// data: PropTypes.array
	}

	ErrorState.defaultProps = {
		// data: []
	}
