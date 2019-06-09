import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './PokeCardStyle';

export default class PokeCard extends Component {
	render() {
		return (
			<View>
				<Text>PokeCard</Text>
			</View>
		);
	}
}

	PokeCard.propTypes = {
		// data: PropTypes.array
	}

	PokeCard.defaultProps = {
		// data: []
	}
