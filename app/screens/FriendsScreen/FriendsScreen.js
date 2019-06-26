import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView
} from 'react-native';

import styles from './FriendsScreenStyle';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import FloatingBtn from 'pokedex-rn/app/components/FloatingBtn';
import TitleText from 'pokedex-rn/app/components/TitleText';
import TeamsContainer from 'pokedex-rn/app/containers/TeamsContainer';
import Divider from 'pokedex-rn/app/components/Divider';
import SubtitleText from 'pokedex-rn/app/components/SubtitleText';
import PokemonCarousel from 'pokedex-rn/app/components/PokemonCarousel';

export default class FriendsScreen extends Component {	

	renderItem = (key, team, fetchtPokemon) => {
		let pureTeam = team.filter(i => i.name);
		pureTeam = pureTeam.map((item, index) => {
			return {
				id: index,
				name: item.name,
				img: item.sprites.front_default
			}
		});
		return (
			<React.Fragment key={key}>
				<View style={styles.marginHorizontal}>
					<SubtitleText text={`Team ${key}`} color='darkest' weight='medium' align='left'/>
				</View>
				<PokemonCarousel data={pureTeam} onPress={(name) => fetchtPokemon(name)}/>
				<Divider />
			</React.Fragment>
		)
	}
	
	render() {
		return (
			<View style={styles.container}>
				<HeaderNav
					statusBar='dark-content'
					left={
						<View style={styles.marginHorizontal}>
							<TitleText text={'Amigos'} color='darkest' weight='medium'/>
						</View>
					}
				/>
				<TeamsContainer renderItem={this.renderItem}/>
				<FloatingBtn onPress={() => this.props.navigation.navigate('FriendScanModal')}/>
			</View>
		);
	}
}
