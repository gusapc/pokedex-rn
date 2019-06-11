import ApiService from 'pokedex-rn/app/services/ApiService';
import normalizeById from 'pokedex-rn/app/utils/NormalizeById';
import { 
	getPokemonListPaginationData,
	getIsLoadingPokemonList,
	getPokemonListEndReached
} from 'pokedex-rn/app/reducers';

export const FETCH_POKEMON_LIST_BEGIN = 'FETCH_POKEMON_LIST_BEGIN';
export const FETCH_POKEMON_LIST_SUCCESS = 'FETCH_POKEMON_LIST_SUCCESS';
export const FETCH_POKEMON_LIST_FAILURE = 'FETCH_POKEMON_LIST_FAILURE';
export const INCREMENT_POKEMON_LIST_PAGE ='INCREMENT_POKEMON_LIST_PAGE';
export const RESET_POKEMON_LIST ='RESET_POKEMON_LIST';
export const RESET_POKEMON_LIST_PAGINATION ='RESET_POKEMON_LIST_PAGINATION';

export function fetchPokemonListBatch( params = {}) {
	return async (dispatch, getState) => {
		if ( getIsLoadingPokemonList(getState()) || getPokemonListEndReached(getState())) return;
		await dispatch(fetchPokemonList(params));
		dispatch(incrementPage());
	}
};

export function fetchPokemonList( params = {}) {
	return async (dispatch, getState) => {
		dispatch(fetchPokemonListBegin());
		let paginationData = getPokemonListPaginationData(getState());
		return ApiService.getPokeList({...paginationData, ...params})
			.then(
				result => {
					let normalized = normalizeById(result.results, 'name');
					dispatch(fetchPokemonListSuccess(normalized));
					return normalized;
				},
				error => {
					dispatch(fetchPokemonListFailure(error));
					throw ({error: error, message: 'Unable to get PokemonList'});
				}
			);
	}
};

export function reloadPokemonList ( params = {}) {
	return async (dispatch, getState) =>{
		dispatch(resetPagination());
		dispatch(fetchPokemonListBegin());
		let paginationData = getPokemonListPaginationData(getState());
		return ApiService.getPokeList({...paginationData, ...params})
			.then(
				result => {
					let normalized = normalizeById(result.results, 'name');
					dispatch(resetPokemonList());
					dispatch(fetchPokemonListSuccess(normalized));
					dispatch(incrementPage());
					return normalized;
				},
				error => {
					dispatch(fetchPokemonListFailure(error));
					throw ({error, message: 'Unable to get PokemonList'});
				}
			);
	}
};

export const incrementPage = () => ({
	type: INCREMENT_POKEMON_LIST_PAGE
});

export const resetPagination = () => ({
	type: RESET_POKEMON_LIST_PAGINATION
});

export const resetPokemonList = () => ({
	type: RESET_POKEMON_LIST
});

export const fetchPokemonListBegin = () => ({
	type: FETCH_POKEMON_LIST_BEGIN
});

export const fetchPokemonListSuccess = PokemonList => ({
	type: FETCH_POKEMON_LIST_SUCCESS,
	payload: { PokemonList }
});

export const fetchPokemonListFailure = error => ({
	type: FETCH_POKEMON_LIST_FAILURE,
	payload: { error }
});
