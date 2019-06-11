import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ErrorStateStyle';
import SubtitleText from 'pokedex-rn/app/components/SubtitleText';
import BodyText from 'pokedex-rn/app/components/BodyText';


export default function ErrorState (props) {
	return (
		<View style={[styles.flex1, styles.justifyContentCenter, styles.alignCenter]}>
			<SubtitleText
				text={props.title}
				color='black'
			/>
			<BodyText 
				text={props.subtitle}
				color='darkest'
			/>
		</View>
	);
}

ErrorState.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}

ErrorState.defaultProps = {
	title: 'Error',
	subtitle: 'Intenta buscar mastarde'
}
