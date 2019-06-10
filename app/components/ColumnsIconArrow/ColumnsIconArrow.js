import React, { Component } from 'react';
import { 
	View, 
	TouchableOpacity,
	Image
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import SubtitleText from 'pokedex-rn/app/components/SubtitleText';
import { Colors } from 'pokedex-rn/app/styles';
import styles from './ColumnsIconArrowStyle'

export default function ColumnsIconArrow (props){
	return (
		<TouchableOpacity 
			onPress={() => props.onPress()}
			style={styles.mainContainer}
		>
			<View style={[styles.container, styles.smallMarginVertical, styles.fullWidth]}>
				<View style={styles.iconContent}>
					{ !props.isIconLeft ? (
							<React.Fragment/>
						):(
							<Feather 
								name={props.iconLeft} 
								size={24} 
								color={Colors[props.color]}
							/>
						)
					}
				</View>
				<View style={styles.fullWidth}>
					<View style={styles.textArrow}>
						<SubtitleText
							color={props.colorText}
							text={props.title}
						/>
						{
							props.isImgRight ? (
								<Image
								resizeMode= 'cover'
								style={styles.img}
								source={ props.imgUrlRight ? {
										uri: props.imgUrlRight
									} : require('pokedex-rn/assets/gball.png')
								}
							/>
							):(
								<Feather 
									name={props.iconRight} 
									size={24} 
									color={Colors[props.color]}
								/>
							)
						}
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

ColumnsIconArrow.propTypes = {
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string,
	title: PropTypes.string,
	color: PropTypes.string,
	colorText: PropTypes.string,
	onPress: PropTypes.func,
	isImgRight: PropTypes.bool,
	isIconLeft: PropTypes.bool,
	imgUrlRight: PropTypes.string,
}

ColumnsIconArrow.defaultProps = {
	iconLeft: 'settings',
	iconRight: 'chevron-right',
	title: 'Account information',
	color: 'light',
	colorText: 'dark',
	onPress: ()=>{},
	isImgRight: false,
	isIconLeft: true,
	imgUrlRight: '',
}