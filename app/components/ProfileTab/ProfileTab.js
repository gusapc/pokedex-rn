import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ProfileTabStyle';

export default class ProfileTab extends Component {
	render() {
		return (
			<View>
				<Text>ProfileTab</Text>
			</View>
		);
	}
}

	ProfileTab.propTypes = {
		// data: PropTypes.array
	}

	ProfileTab.defaultProps = {
		// data: []
	}
