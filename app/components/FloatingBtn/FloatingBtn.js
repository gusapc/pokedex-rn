import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './FloatingBtnStyle';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'pokedex-rn/app/styles';

export default function FloatingBtn (props) {
	return (
		<TouchableOpacity 
			style={[styles.circle, styles.justifyContentCenter, styles.alignCenter]}
			onPress={() => props.onPress()}
		>
			<Feather 
			name={props.iconName} 
			size={24} 
			color={Colors.white}
		/>
		</TouchableOpacity>
	);
}

FloatingBtn.propTypes = {
	onPress: PropTypes.func,
	iconName: PropTypes.string
}

FloatingBtn.defaultProps = {
	iconName: 'plus',
	onPress: () => {}
}
