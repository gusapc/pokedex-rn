import normalizeById from 'pokedex-rn/app/utils/NormalizeById';
import ApiService from 'pokedex-rn/app/services/ApiService';

export const ADD_DATA_HOENN = 'ADD_DATA_HOENN';

export function fetchHoenn(params) {
	return async dispatch => {
		await ApiService.getPokeList(params)
			.then(
				result => {
					let normalized = normalizeById(result.results, 'name');
					dispatch(addDataHoenn(normalized));
					return result;
				},
				error => {
					throw ({error: error, message: 'An error ocurred'});
				}
			)
	};
}


export const addDataHoenn = data => ({
	type: ADD_DATA_HOENN,
	payload: { data }
});