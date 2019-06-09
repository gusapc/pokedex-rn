import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './RowDoubleTextStyle';

export default class RowDoubleText extends Component {
	render() {
		return (
			<View>
				<Text>RowDoubleText</Text>
			</View>
		);
	}
}

	RowDoubleText.propTypes = {
		// data: PropTypes.array
	}

	RowDoubleText.defaultProps = {
		// data: []
	}
