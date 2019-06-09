import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './PokemonCarouselStyle';

export default class PokemonCarousel extends Component {
	render() {
		return (
			<View>
				<Text>PokemonCarousel</Text>
			</View>
		);
	}
}

	PokemonCarousel.propTypes = {
		// data: PropTypes.array
	}

	PokemonCarousel.defaultProps = {
		// data: []
	}
