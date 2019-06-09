import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './RegionMenuStyle';

export default class RegionMenu extends Component {
	render() {
		return (
			<View>
				<Text>RegionMenu</Text>
			</View>
		);
	}
}

	RegionMenu.propTypes = {
		// data: PropTypes.array
	}

	RegionMenu.defaultProps = {
		// data: []
	}
