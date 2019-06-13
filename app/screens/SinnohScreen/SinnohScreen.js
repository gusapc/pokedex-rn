import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import styles from './SinnohScreenStyle';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import TitleText from 'pokedex-rn/app/components/TitleText';
import PokeListByRegionContainer from 'pokedex-rn/app/containers/PokeListByRegionContainer';

export default class SinnohScreen extends Component {	
	
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
							<TitleText text={'Pokedex Sinnoh ▼'} color='darkest' weight='medium'/>
						</TouchableOpacity>
					}
				/>
				<ScrollView>
					<PokeListByRegionContainer
						modelName='Sinnoh'
						regionId='7'
					/>
				</ScrollView>
			</View>
		);
	}
}