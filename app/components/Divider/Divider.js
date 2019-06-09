import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './DividerStyle';

export default class Divider extends Component {
	render() {
		return (
			<View>
				<Text>Divider</Text>
			</View>
		);
	}
}

	Divider.propTypes = {
		// data: PropTypes.array
	}

	Divider.defaultProps = {
		// data: []
	}
