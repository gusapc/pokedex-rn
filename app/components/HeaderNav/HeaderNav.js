import React from 'react';
import { 
	View,
	StatusBar 
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './HeaderNavStyle';
import { Colors } from 'pokedex-rn/app/styles';

export default function HeaderNav (props) {

	let bgColor = { backgroundColor: Colors[props.bgColor] }
	return (
		<View style={[
			styles.row,
			styles.baseMarginTop,
			styles.alignItemsCenter,
			styles.baseHorizontalPadding,
			styles.justifySpaceBetween,
			styles.marginVertical,
			bgColor]}
		>
				<StatusBar barStyle={ props.statusBar } />
				{ props.left && props.left }
				{ props.center && (props.center ) }
				{ props.right && (props.right) }
		</View>
	);
}

HeaderNav.propTypes = {
	left: PropTypes.object,
	statusBar: PropTypes.string,
	center: PropTypes.object,
	right: PropTypes.object,
	bgColor: PropTypes.string,
}

HeaderNav.defaultProps = {
	left: null,
	statusBar: 'default',
	center: null,
	right: null,
	bgColor: 'transparent',
}