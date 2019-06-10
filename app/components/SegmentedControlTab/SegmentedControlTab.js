import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import LabelText from 'pokedex-rn/app/components/LabelText';
import styles from './SegmentedControlTabStyle';

export default function SegmentedControlTab (props) {
	return (
		<View style={[styles.row, styles.tabsConteiner]}>
			<TouchableOpacity 
				style={[
					styles.row,
					styles.buttonStyleLeft,
					styles.justifyContentCenter,
					styles.alignItemsCenter,
					props.current === props.leftName ? styles.redButton : styles.whiteButton
				]}
				onPress={props.leftAction}
			>
				<LabelText
					text={props.leftText}
					color={props.current === props.leftName ? 'black' : 'red'}
					weight={'bold'}
				/>
			</TouchableOpacity>
			<TouchableOpacity 
				style={[
					styles.row,
					styles.buttonStyleRight,
					styles.justifyContentCenter,
					styles.alignItemsCenter,
					props.current === props.rightName? styles.redButton : styles.whiteButton
				]}
				onPress={props.rightAction}
			>
				<LabelText
					text={props.rightText}
					color={props.current === props.rightName ? 'black' : 'red'}
					weight={'bold'}
				/>
			</TouchableOpacity>	
		</View>
	);
}
SegmentedControlTab.propTypes = {
	leftText: PropTypes.string,
	leftName: PropTypes.string,
	rightText: PropTypes.string,
	rightName: PropTypes.string,
	leftAction: PropTypes.func,
	rightAction: PropTypes.func,
	current: PropTypes.string,
}

SegmentedControlTab.defaultProps = {
	leftText: '',
	leftName: '',
	rightText: '',
	rightName: '',
	leftAction: () => {},
	rightAction: () => {},
	current: ''
}
