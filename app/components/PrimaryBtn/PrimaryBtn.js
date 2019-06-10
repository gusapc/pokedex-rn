import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import BodyText from 'pokedex-rn/app/components/BodyText';
import styles from './PrimaryBtnStyle';
import { Colors } from 'pokedex-rn/app/styles';

export default function PrimaryBtn (props) {
	const backgroundColor = { backgroundColor: Colors[props.backgroundColor] || Colors.main }
	return (
		<TouchableOpacity 
			onPress={props.onPress}
			style={[backgroundColor, styles.btn]}
		>
			<BodyText 
				color={props.color} 
				text={props.text}
			/>
		</TouchableOpacity>
	);
}

PrimaryBtn.propTypes = {
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
}

PrimaryBtn.defaultProps = {
 	color: 'white'
}
