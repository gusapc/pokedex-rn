import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './IconBottombarStyle';
import { Feather } from '@expo/vector-icons';
import TinyText from 'pokedex-rn/app/components/TinyText';
import { Colors } from 'pokedex-rn/app/styles';

export default function IconBottombar (props){
	return (
		<View style={[styles.alignCenter]}>
			<Feather 
				name={props.iconName} 
				size={25}
				color={Colors[props.colorName]}
			/>
			<TinyText
				text={props.text}
				color={props.colorName}
				weight='medium'
			/>
		</View>
	);
}

IconBottombar.propTypes = {
	iconName: PropTypes.string,
	colorName: PropTypes.string,
	text: PropTypes.string,
}

IconBottombar.defaultProps = {
	iconName: 'home',
	colorName: 'main',
	text: '',
}