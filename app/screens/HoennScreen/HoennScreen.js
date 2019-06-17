import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import styles from './HoennScreenStyle';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import TitleText from 'pokedex-rn/app/components/TitleText';
import HoennContainer from 'pokedex-rn/app/containers/HoennContainer';

export default class HoennScreen extends Component {	
	
	render() {
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
							<TitleText text={'Pokedex Hoenn ▼'} color='darkest' weight='medium'/>
						</TouchableOpacity>
					}
				/>
				<ScrollView>
					<HoennContainer />
				</ScrollView>
			</View>
		);
	}
}