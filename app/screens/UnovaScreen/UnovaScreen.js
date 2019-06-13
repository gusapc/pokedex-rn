import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import styles from './UnovaScreenStyle';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import TitleText from 'pokedex-rn/app/components/TitleText';
import PokeListByRegionContainer from 'pokedex-rn/app/containers/PokeListByRegionContainer';

export default class UnovaScreen extends Component {	
	
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
							<TitleText text={'Pokedex Unova ▼'} color='darkest' weight='medium'/>
						</TouchableOpacity>
					}
				/>
				<ScrollView>
					<PokeListByRegionContainer
						modelName='Unova'
						regionId='9'
					/>
				</ScrollView>
			</View>
		);
	}
}