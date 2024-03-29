import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import styles from './AlolaScreenStyle';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import TitleText from 'pokedex-rn/app/components/TitleText';
import PokeListByRegionContainer from 'pokedex-rn/app/containers/PokeListByRegionContainer';
import PokeListContainer from 'pokedex-rn/app/containers/PokeListContainer';

export default class AlolaScreen extends Component {	
	
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
							<TitleText text={'Pokedex Alola ▼'} color='darkest' weight='medium'/>
						</TouchableOpacity>
					}
				/>
				<PokeListContainer params={{offset: 721}} modelName={'PokemonListAlola'}/>
			</View>
		);
	}
}
