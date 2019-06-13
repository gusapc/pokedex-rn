import Kanto, * as fromKanto from 'pokedex-rn/app/reducers/KantoReducer.js'
import PokemonList, * as fromPokemonList from 'pokedex-rn/app/reducers/PokemonListReducer.js'
import { combineReducers } from 'redux'
import Auth, * as fromAuth from 'pokedex-rn/app/reducers/AuthReducer';

const rootReducer = combineReducers({
    Auth,
    PokemonList,
    Kanto
});

export default rootReducer;

// Aurh
export const getAuthData = (state) =>
	fromAuth.getAuthData(state.Auth);
// Pokelist
export const getIsLoadingPokemonList = state =>
	fromPokemonList.getIsLoadingPokemonList(state.PokemonList);

export const getIsRefreshingPokemonList = state =>
	fromPokemonList.getIsRefreshingPokemonList(state.PokemonList);

export const getPokemonList = (state) =>
	fromPokemonList.getPokemonList(state.PokemonList);

export const getPokemonListPaginationData = state =>
	fromPokemonList.getPokemonListPaginationData(state.PokemonList);

export const getPokemonListEndReached = state =>
	fromPokemonList.getPokemonListEndReached(state.PokemonList);

export const getErrorPokemonList = state =>
	fromPokemonList.getErrorPokemonList(state.PokemonList);

//kanto
export const getIsLoadingKanto = state => fromKanto.getIsLoadingKanto(state.Kanto);

export const getKanto = (state) => fromKanto.getKanto(state.Kanto);

export const getErrorKanto = state => fromKanto.getErrorKanto(state.Kanto);