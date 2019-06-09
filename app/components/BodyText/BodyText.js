import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './BodyTextStyle';
import { Fonts, Colors } from 'pokedex-rn/app/styles';

export default function BodyText (props) {
	const color = { color: Colors[props.color] };
	const weight = { fontWeight: Fonts.weight[props.weight] };
	const align = { textAlign: props.align };
	return (
		<React.Fragment>
			<Text style={[styles.text, color, weight, align]}>{props.text}</Text>
		</React.Fragment>
	);
}

BodyText.propTypes = {
	text: PropTypes.string,
	weight: PropTypes.string,
	color: PropTypes.string,
	align: PropTypes.string
}

BodyText.defaultProps = {
	text: '',
	weight: 'regular',
	color: 'darkest',
	align: 'right'//left
}