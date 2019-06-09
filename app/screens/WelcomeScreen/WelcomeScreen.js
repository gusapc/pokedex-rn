import React, { Component } from 'react';
import {
	View,
	Text,
	Button,
	ScrollView
} from 'react-native';

import styles from './WelcomeScreenStyle';
import HugeText from 'pokedex-rn/app/components/HugeText';
import LabelText from 'pokedex-rn/app/components/LabelText';
import SubtitleText from 'pokedex-rn/app/components/SubtitleText';
import TinyText from 'pokedex-rn/app/components/TinyText';
import TitleText from 'pokedex-rn/app/components/BodyText';
import BodyText from 'pokedex-rn/app/components/BodyText';
import AddTeamPokemon from 'pokedex-rn/app/components/AddTeamPokemon';

export default class WelcomeScreen extends Component {	

	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<ScrollView>
				<View style={[styles.container, styles.baseMarginTop]}>
					<HugeText 
						text='WelcomeScreen'
						align='left'
					/>
					<LabelText 
						text='WelcomeScreen'
						color='red'
					/>
					<SubtitleText 
						text='WelcomeScreen'
						color='red'
						weight='bold'
					/>
					<TinyText 
						text='WelcomeScreen'
						color='red'
						align='left'
					/>
					<TitleText 
						text='WelcomeScreen'
						color='red'
						weight='bold'
					/>
					<BodyText 
						text='WelcomeScreen'
						color='red'
						align='left'
					/>
					<AddTeamPokemon />
					<Button 
						onPress={() => this.props.navigation.navigate('LoginScreen')}
						title='go to LoginScreen'
						color='red'
					/> 
				</View>
			</ScrollView>
		);

	}
}
