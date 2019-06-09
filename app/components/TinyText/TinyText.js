import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './TinyTextStyle';
import { Fonts, Colors } from 'pokedex-rn/app/styles';

export default function TinyText (props) {
	const color = { color: Colors[props.color] };
	const weight = { fontWeight: Fonts.weight[props.weight] };
	const align = { textAlign: props.align };
	return (
		<React.Fragment>
			<Text style={[styles.text, color, weight, align]}>{props.text}</Text>
		</React.Fragment>
	);
}

TinyText.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string
}

TinyText.defaultProps = {
	text: '',
	weight: 'regular',
	color: 'darkest',
	align: 'right'//left
}
