import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './SimpleCardStyle';

export default class SimpleCard extends Component {
	render() {
		return (
			<View>
				<Text>SimpleCard</Text>
			</View>
		);
	}
}

	SimpleCard.propTypes = {
		// data: PropTypes.array
	}

	SimpleCard.defaultProps = {
		// data: []
	}
