import ApiService from 'pokedex-rn/app/services/ApiService';

export const GET_KANTO_DATA_BEGIN = 'GET_KANTO_DATA_BEGIN';
export const GET_KANTO_DATA_SUCCESS = 'GET_KANTO_DATA_SUCCESS';
export const GET_KANTO_DATA_FAILURE = 'GET_KANTO_DATA_FAILURE';

export function getKantoData(params = {}) {
	return async dispatch => {
		dispatch(getKantoDataBegin());
		await ApiService.getPokeListByRegion(params)
			.then(
				result => {
					dispatch(getKantoDataSuccess(result));
				},
				error => {
					dispatch(getKantoDataFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

export const getKantoDataBegin = () => ({
	type: GET_KANTO_DATA_BEGIN
});
export const getKantoDataSuccess = data => ({
	type: GET_KANTO_DATA_SUCCESS,
	payload: { data }
});
export const getKantoDataFailure = error => ({
	type: GET_KANTO_DATA_FAILURE,
	payload: { error }
});
