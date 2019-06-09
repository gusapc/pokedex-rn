import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './FloatingBtnStyle';

export default class FloatingBtn extends Component {
	render() {
		return (
			<View>
				<Text>FloatingBtn</Text>
			</View>
		);
	}
}

	FloatingBtn.propTypes = {
		// data: PropTypes.array
	}

	FloatingBtn.defaultProps = {
		// data: []
	}
