import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './LabelTextStyle';
import { Fonts, Colors } from 'pokedex-rn/app/styles';

export default function LabelText (props) {
	const color = { color: Colors[props.color] };
	const weight = { fontWeight: Fonts.weight[props.weight] };
	const align = { textAlign: props.align };
	return (
		<React.Fragment>
			<Text style={[styles.text, color, weight, align]}>{props.text}</Text>
		</React.Fragment>
	);
}


LabelText.propTypes = {
	text: PropTypes.string,
	weight: PropTypes.string,
	color: PropTypes.string,
	align: PropTypes.string
}

LabelText.defaultProps = {
	text: '',
	color: 'darkest',
	weight: 'regular',
	align: 'left'
}
