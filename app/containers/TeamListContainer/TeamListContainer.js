import React, { Component } from 'react';
import {
	FlatList,
	RefreshControl
} from 'react-native';
import { 
	getCreateApiReducerData,
	getAuthData
} from 'pokedex-rn/app/reducers';
import EmptyState from 'pokedex-rn/app/components/EmptyState';
import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';
import PokeCard from 'pokedex-rn/app/components/PokeCard';
import { connect } from "react-redux";
import NavigationService from 'pokedex-rn/app/services/NavigationService';
import { 
	getIsLoadingPokemon,
} from 'pokedex-rn/app/reducers';
class TeamListContainer extends Component {	

	capitalLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1)


	renderItem = ({item}) => (
		<PokeCard 
			img={item.sprites.front_default}
			name={item.name}
			data={item.stats}
			onPress={() =>{
					this.props.fetchtPokemon(item.name);
					NavigationService.navigate('PokemonDetilsScreen', {
						pokeName: this.capitalLetter(item.name)
					});
				}}
		/>
	)	
	render() {
		let userTeam = []
		if(this.props.teams[this.props.authData.username]) userTeam = this.props.teams[this.props.authData.username].filter( i => i.name? true : false);
		return (
			<FlatList
				data={userTeam}
				extraData={userTeam}
				renderItem={this.renderItem}
				keyExtractor={(item, index) => `${item.name}${index}`}
				ListEmptyComponent={() => (<EmptyState />)}
			/>
		);
	}
}

mapStateToProps = state => ({
	authData: getAuthData(state),
	teams: getCreateApiReducerData(state, 'PokeTeams'),
	isLoading: getIsLoadingPokemon(state),
})

export default connect(mapStateToProps, {fetchtPokemon})(TeamListContainer);
