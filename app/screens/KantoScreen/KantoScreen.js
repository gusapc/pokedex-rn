import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import styles from './KantoScreenStyle';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import TitleText from 'pokedex-rn/app/components/TitleText';
import KantoContainer from 'pokedex-rn/app/containers/KantoContainer';

export default function KantoScreen (props) {
	return (
		<View style={styles.container}>
			<HeaderNav
				statusBar='dark-content'
				left={
					<TouchableOpacity
						onPress={() => this.props.navigation.openDrawer()}
						style={styles.marginHorizontal}
						activeOpacity={0.6}
					>
						<TitleText text={'Pokedex Kanto ▼'} color='darkest' weight='medium'/>
					</TouchableOpacity>
				}
			/>
			<ScrollView style={styles.bottomMargin}>
				<KantoContainer/>
			</ScrollView>
		</View>
	);
}
