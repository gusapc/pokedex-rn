import Kanto, * as fromKanto from 'pokedex-rn/app/reducers/KantoReducer.js'
import PokemonList, * as fromPokemonList from 'pokedex-rn/app/reducers/PokemonListReducer.js'
import { combineReducers } from 'redux'
import Auth, * as fromAuth from 'pokedex-rn/app/reducers/AuthReducer';
import CreateApiReducer, * as fromCreateApiReducer from 'pokedex-rn/app/reducers/CreateApiReducer.js'
import CreateApiListReducer, * as fromCreateApiListReducer from 'pokedex-rn/app/reducers/CreateApiListReducer.js'

const rootReducer = combineReducers({
    Auth,
    PokemonList,
    Kanto,
    Johto: CreateApiReducer('Johto'),
	Hoenn: CreateApiReducer('Hoenn'),
	Sinnoh: CreateApiReducer('Sinnoh'),
	Unova: CreateApiReducer('Unova'),
	PokemonListKalos: CreateApiListReducer('PokemonListKalos'),
	PokemonListAlola: CreateApiListReducer('PokemonListAlola')
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

	
