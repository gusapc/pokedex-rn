import ApiService from 'pokedex-rn/app/services/ApiService';

export const FETCH_POKEMON_BEGIN = 'FETCH_POKEMON_BEGIN';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export function fetchtPokemon(name) {
	return async dispatch => {
		dispatch(fetchtokemonBegin());
		await ApiService.getPokemon(name)
			.then(
				result => {
					dispatch(fetchtokemonSuccess(result));
				},
				error => {
					dispatch(fetchtokemonFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

export const fetchtokemonBegin = () => ({
	type: FETCH_POKEMON_BEGIN
});
export const fetchtokemonSuccess = data => ({
	type: FETCH_POKEMON_SUCCESS,
	payload: { data }
});
export const fetchtokemonFailure = error => ({
	type: FETCH_POKEMON_FAILURE,
	payload: { error }
});
