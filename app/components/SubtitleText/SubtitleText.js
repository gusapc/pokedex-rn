import React, { PureComponent } from 'react';
import { Text  } from 'react-native';
import PropTypes from 'prop-types';

import styles from './SubtitleTextStyle';
import { Fonts, Colors } from 'pokedex-rn/app/styles';

export default function SubtitleText (props) {
	const color = { color: Colors[props.color] };
	const weight = { fontWeight: Fonts.weight[props.weight] };
	const align = { textAlign: props.align };
	return (
		<React.Fragment>
			<Text style={[styles.text, color, weight, align]}>{props.text}</Text>
		</React.Fragment>
	);
}


SubtitleText.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string
}

SubtitleText.defaultProps = {
	text: '',
	weight: 'regular',
	color: 'darkest',
	align: 'right'//left
}
