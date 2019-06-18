import {
	FETCH_POKEMON_BEGIN,
	FETCH_POKEMON_SUCCESS,
	FETCH_POKEMON_FAILURE
} from 'pokedex-rn/app/actions/PokemonActions';

const initialState = {
	item: {},
	isLoading: false,
	error: '' 
};

export default function PokemonReducer (state = initialState, action) {
	switch (action.type) {
		case FETCH_POKEMON_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case FETCH_POKEMON_SUCCESS:
			return {
				...state,
				item: action.payload.data,
				isLoading: false,
				error: ''
			}
		case FETCH_POKEMON_FAILURE:
			return {
				...state,
				error: action.payload.error.status,
				isLoading: false
			}
		default:
			return state;
	}
};


export const getErrorPokemon = state => {
	return state.error;
}

export const getIsLoadingPokemon = state => {
	return state.isLoading;
}

export const getPokemon = state => {
	return state.item;
}
