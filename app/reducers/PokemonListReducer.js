import {
	FETCH_POKEMON_LIST_BEGIN,
	FETCH_POKEMON_LIST_SUCCESS,
	FETCH_POKEMON_LIST_FAILURE,
	INCREMENT_POKEMON_LIST_PAGE,
	RESET_POKEMON_LIST,
	RESET_POKEMON_LIST_PAGINATION
} from 'pokedex-rn/app/actions/PokemonListActions';

const PAGE_SIZE = 900;

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	limit: PAGE_SIZE,
	offset: 0,
	endReached: false
}

export default function PokemonListReducer (state = initialState, action) {
	switch (action.type) {
		case FETCH_POKEMON_LIST_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case FETCH_POKEMON_LIST_SUCCESS:
			let allIds = [...new Set(state.allIds.concat(action.payload.PokemonList.allIds))];
			let byId = {
				...state.byId,
				...action.payload.PokemonList.byId
			};
			return{
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.PokemonList.allIds.length < PAGE_SIZE
			}
		case FETCH_POKEMON_LIST_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.error,
			}
		case INCREMENT_POKEMON_LIST_PAGE:
			return{
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		case RESET_POKEMON_LIST_PAGINATION:
			return{
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		case RESET_POKEMON_LIST:
			return{
				...initialState
			}
		default:
			return state;
	}
};

export const getIsLoadingPokemonList = state => {
	return state.isLoading;
}

export const getIsRefreshingPokemonList = state => {
	return state.isLoading && (state.offset === 0);
}

export const getPokemonList = (state) => {
	return state.allIds.map(id => state.byId[id]);
}

export const getPokemonListPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}

export const getPokemonListEndReached = state => {
	return state.endReached;
}

export const getErrorPokemonList = state => {
	return state.error;
}
