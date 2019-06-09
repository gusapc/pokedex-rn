import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './CircleImgStyle';

export default class CircleImg extends Component {
	render() {
		return (
			<View>
				<Text>CircleImg</Text>
			</View>
		);
	}
}

	CircleImg.propTypes = {
		// data: PropTypes.array
	}

	CircleImg.defaultProps = {
		// data: []
	}
