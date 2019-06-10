import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styles from './SimpleCardStyle';

export default function SimpleCard (props) {
	return(
		<TouchableOpacity
			onPress={props.onPress}
			disabled={!props.onPress}
			activeOpacity={0.2}
			style={[styles.card, {elevation: props.elevation ?  5: 1}, ( !props.noPaddingHorizontal && styles.noPaddingHorizontal)]}
		>
			{props.children}
		</TouchableOpacity>
	);
}

SimpleCard.propTypes = {
	onPress: PropTypes.func,
	noPaddingHorizontal: PropTypes.bool,
	elevation: PropTypes.bool,
}

SimpleCard.defaultProps = {
	onPress: null,
	noPaddingHorizontal: false,
	elevation: false
}
