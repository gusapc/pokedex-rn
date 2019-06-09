import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './HugeTextStyle';
import { Fonts, Colors } from 'pokedex-rn/app/styles';

export default function HugeText (props) {
	const color = { color: Colors[props.color] };
	const weight = { fontWeight: Fonts.weight[props.weight] };
	const align = { textAlign: props.align };
	return (
		<React.Fragment>
			<Text style={[styles.text, color, weight, align]}>{props.text}</Text>
		</React.Fragment>
	);
}


HugeText.propTypes = {
	text: PropTypes.node,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string
}

HugeText.defaultProps = {
	text: '',
	weight: 'regular',
	color: 'darkest',
	align: 'right'//left
}
