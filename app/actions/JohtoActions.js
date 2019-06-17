import normalizeById from 'pokedex-rn/app/utils/NormalizeById';
import ApiService from 'pokedex-rn/app/services/ApiService';

export const ADD_DATA_JOHTO = 'ADD_DATA_JOHTO';

export function fetchJohto() {
	return async dispatch => {
		await ApiService.getPokeListByRegion({regionId: 7})
			.then(
				result => {
					let normalized = normalizeById(result.pokemon_entries, 'entry_number');
					dispatch(addDataJohto(normalized));
					return normalized;
				},
				error => {
					throw ({error: error, message: 'An error ocurred'});
				}
			)
	};
}


export const addDataJohto = data => ({
	type: ADD_DATA_JOHTO,
	payload: { data }
});