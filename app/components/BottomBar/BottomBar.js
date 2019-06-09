import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './BottomBarStyle';

export default class BottomBar extends Component {
	render() {
		return (
			<View>
				<Text>BottomBar</Text>
			</View>
		);
	}
}

	BottomBar.propTypes = {
		// data: PropTypes.array
	}

	BottomBar.defaultProps = {
		// data: []
	}
