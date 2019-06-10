import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './EmptyStateStyle';
import SubtitleText from 'pokedex-rn/app/components/SubtitleText';
import BodyText from 'pokedex-rn/app/components/BodyText';

export default function EmptyState (props) {
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

