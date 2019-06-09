import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './PrimaryBtnStyle';

export default class PrimaryBtn extends Component {
	render() {
		return (
			<View>
				<Text>PrimaryBtn</Text>
			</View>
		);
	}
}

	PrimaryBtn.propTypes = {
		// data: PropTypes.array
	}

	PrimaryBtn.defaultProps = {
		// data: []
	}
