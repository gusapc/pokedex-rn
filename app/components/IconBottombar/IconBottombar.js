import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './IconBottombarStyle';

export default class IconBottombar extends Component {
	render() {
		return (
			<View>
				<Text>IconBottombar</Text>
			</View>
		);
	}
}

	IconBottombar.propTypes = {
		// data: PropTypes.array
	}

	IconBottombar.defaultProps = {
		// data: []
	}
