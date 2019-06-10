import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './RowDoubleTextStyle';
import SubtitleText from 'pokedex-rn/app/components/SubtitleText';
import BodyText from 'pokedex-rn/app/components/BodyText';

export default function RowDoubleText (props){
	return (
		<View style={[styles.row, styles.marginHorizontal, styles.justifySpaceBetween]}>
				<BodyText
					text={props.title}
					color='darkest'
				/>
				<BodyText
					text={props.subtitle}
					color='light'
				/>
		</View>
	);
}

RowDoubleText.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}
RowDoubleText.defaultProps = {
	title: '',
	subtitle: ''
}