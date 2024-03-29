import ApiService from 'pokedex-rn/app/services/ApiService';

export const GET_FROM_API_BEGIN = 'GET_FROM_API_BEGIN';
export const GET_FROM_API_SUCCESS = 'GET_FROM_API_SUCCESS';
export const GET_FROM_API_FAILURE = 'GET_FROM_API_FAILURE';
export const SET_DATA = 'SET_DATA';
///import { getCreateApiReducerData } from 'pokedex-rn/app/reducers'

export function fetchApi (modelName, apiMethod, paramsData = {}) {
	return async (dispatch, getState) => {
		dispatch(fetchApiBegin(modelName));
		return ApiService[apiMethod](paramsData)
			.then(
				result => {
					dispatch(fetchApiSuccess(modelName, result));
				},
				error => {
					dispatch(fetchApiFailure(modelName, error));
					throw ({error: error});
				}
			)
	};
}



// Action: Function that returns an object with action data for reducer
export const fetchApiBegin = (modelName) => ({
	type: GET_FROM_API_BEGIN,
	name: modelName
});
export const fetchApiSuccess = (modelName, data) => ({
	type: GET_FROM_API_SUCCESS,
	name: modelName,
	payload: { data }
});
export const setData = (modelName, data) => ({
	type: SET_DATA,
	name: modelName,
	payload: { data }
});
export const fetchApiFailure = (modelName, error) => ({
	type: GET_FROM_API_FAILURE,
	name: modelName,
	payload: { error }
});
