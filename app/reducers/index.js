import Pokemon, * as fromPokemon from 'pokedex-rn/app/reducers/PokemonReducer.js'
import Kanto, * as fromKanto from 'pokedex-rn/app/reducers/KantoReducer.js'
import PokemonList, * as fromPokemonList from 'pokedex-rn/app/reducers/PokemonListReducer.js'
import { combineReducers } from 'redux'
import Auth, * as fromAuth from 'pokedex-rn/app/reducers/AuthReducer';
import CreateApiReducer, * as fromCreateApiReducer from 'pokedex-rn/app/reducers/CreateApiReducer.js'
import CreateApiListReducer, * as fromCreateApiListReducer from 'pokedex-rn/app/reducers/CreateApiListReducer.js'
import Johto, * as fromJohto from 'pokedex-rn/app/reducers/JohtoReducer.js';
import Hoenn, * as fromHoenn from 'pokedex-rn/app/reducers/HoennReducer.js';

const rootReducer = combineReducers({
    Auth,
    Pokemon,
    PokemonList,
    Kanto,
    Johto,
    Unova: CreateApiReducer('Unova'),
    PokeTeams: CreateApiReducer('PokeTeams'),
    PokemonListAlola: CreateApiListReducer('PokemonListAlola'),
    Hoenn
});

export default rootReducer;

//Pokemon

export const getIsLoadingPokemon = state =>
	fromPokemon.getIsLoadingPokemon(state.Pokemon);

export const getErrorPokemon = state =>
	fromPokemon.getErrorPokemon(state.Pokemon);

export const getPokemon = state =>
	fromPokemon.getPokemon(state.Pokemon);

//Hoenn
export const getHoenn = state =>
	fromHoenn.getHoenn(state.Hoenn);
//Johto
export const getJohto = state =>
	fromJohto.getJohto(state.Johto);

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

//CreateApiReducer
export const getCreateApiReducerData = (state, modelName) =>
	fromCreateApiReducer.getCreateApiReducerData(state[modelName]);

export const getCreateApiReducerIsLoading = (state, modelName) =>
	fromCreateApiReducer.getCreateApiReducerIsLoading(state[modelName]);

export const getCreateApiReducerError = (state, modelName) =>
	fromCreateApiReducer.getCreateApiReducerError(state[modelName]);

//CreateApiListReducer
export const getIsLoadingApiList = (state, modelName) =>
	fromCreateApiListReducer.getIsLoadingApiList(state[modelName]);

export const getIsRefreshingApiList = (state, modelName) =>
	fromCreateApiListReducer.getIsRefreshingApiList(state[modelName]);

export const getErrorApiList = (state, modelName) =>
	fromCreateApiListReducer.getErrorApiList(state[modelName]);

export const getApiListData = (state, modelName) =>
	fromCreateApiListReducer.getApiListData(state[modelName]);

export const getApiListPaginationData = (state, modelName) =>
	fromCreateApiListReducer.getApiListPaginationData(state[modelName]);

export const getApiListEndReached = (state, modelName) =>
	fromCreateApiListReducer.getApiListEndReached(state[modelName]);

	
