import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView
} from 'react-native';

import { connect } from "react-redux";
import { 
	getCreateApiReducerData,
	getAuthData
} from 'pokedex-rn/app/reducers';
import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';
import EmptyState from 'pokedex-rn/app/components/EmptyState';

class TeamsContainer extends Component {

	isEmpty(obj) {
		for(let key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}	
	
	render() {
		let teams = {...this.props.teams};
		delete teams[this.props.authData.username];
		if(this.isEmpty(this.props.teams)) return (<EmptyState />);

		let components = [];

		for(let key in teams) {
			components.push(this.props.renderItem(key, teams[key], this.props.fetchtPokemon));
		}
		return (
			<ScrollView>
				{components.reverse()}
			</ScrollView>
		);
	}
}

mapStateToProps = state => ({
	authData: getAuthData(state),
	teams: getCreateApiReducerData(state, 'PokeTeams')
})

export default connect(mapStateToProps, {fetchtPokemon})(TeamsContainer);
