import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './SegmentedControlTabStyle';

export default class SegmentedControlTab extends Component {
	render() {
		return (
			<View>
				<Text>SegmentedControlTab</Text>
			</View>
		);
	}
}

	SegmentedControlTab.propTypes = {
		// data: PropTypes.array
	}

	SegmentedControlTab.defaultProps = {
		// data: []
	}
