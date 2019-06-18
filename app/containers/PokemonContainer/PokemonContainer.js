import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';
import { setData } from 'pokedex-rn/app/actions/ApiActions';
import { 
	getIsLoadingPokemon,
	getErrorPokemon,
	getPokemon,
	getCreateApiReducerData,
	getAuthData
} from 'pokedex-rn/app/reducers';
class PokemonContainer extends Component {	


	render() {
		let isLoading = this.props.isLoading;
		let error = this.props.error;
		let pokemon = this.props.pokemon;
		let fetchtPokemon = this.props.fetchtPokemon;
		let setData = this.props.setData;
		//let teams = this.props.teams;
		let authData = this.props.authData;
		return (
			<React.Fragment>
			{
				this.props.children(isLoading, error, pokemon, fetchtPokemon, setData, authData)
			}
			</React.Fragment>
		);
	}
}
mapStateToProps = state => ({
	isLoading: getIsLoadingPokemon(state),
	error: getErrorPokemon(state),
	pokemon: getPokemon(state),
	//teams: getCreateApiReducerData(state, 'PokeTeams'),
	authData: getAuthData(state)
})

export default connect(mapStateToProps,{
	fetchtPokemon,
	setData
})(PokemonContainer);
