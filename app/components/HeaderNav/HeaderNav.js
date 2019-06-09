import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './HeaderNavStyle';

export default class HeaderNav extends Component {
	render() {
		return (
			<View>
				<Text>HeaderNav</Text>
			</View>
		);
	}
}

	HeaderNav.propTypes = {
		// data: PropTypes.array
	}

	HeaderNav.defaultProps = {
		// data: []
	}
