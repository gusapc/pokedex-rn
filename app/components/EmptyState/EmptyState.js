import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './EmptyStateStyle';

export default class EmptyState extends Component {
	render() {
		return (
			<View>
				<Text>EmptyState</Text>
			</View>
		);
	}
}

	EmptyState.propTypes = {
		// data: PropTypes.array
	}

	EmptyState.defaultProps = {
		// data: []
	}
