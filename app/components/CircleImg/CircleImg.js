import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CircleImgStyle';
import { Metrics} from 'pokedex-rn/app/styles'

export default function CircleImg (props){

	let img = props.image ? { uri: props.image } : require('pokedex-rn/assets/gball.png');
	
	return (
		<Image
			resizeMode= 'cover'
			style={styles['avatar' + props.size]}
			source={img}
		/>
	);
}

CircleImg.propTypes = {
	size: PropTypes.string,
	image: PropTypes.string
}
CircleImg.defaultProps = {
	size: 'Huge',
	image: ''
}