import ApiService from 'pokedex-rn/app/services/ApiService';
import normalizeById from 'pokedex-rn/app/utils/NormalizeById';

import {
	getIsLoadingApiList,
	getIsRefreshingApiList,
	getErrorApiList,
	getApiListData,
	getApiListPaginationData,
	getApiListEndReached
} from 'pokedex-rn/app/reducers'

export const FETCH_API_LIST_BEGIN ='FETCH_API_LIST_BEGIN';
export const FETCH_API_LIST_SUCCESS ='FETCH_API_LIST_SUCCESS';
export const FETCH_API_LIST_FAILURE ='FETCH_API_LIST_FAILURE';
export const INCREMENT_API_LIST_PAGE ='INCREMENT_API_LIST_PAGE';
export const RESET_API_LIST ='RESET_API_LIST';
export const RESET_API_LIST_PAGINATION ='RESET_API_LIST_PAGINATION';

export function fetchApiListBatch(modelName, apiMethod, paramsData = {}) {
	return async (dispatch, getState) => {
		if ( getIsLoadingApiList(getState(), modelName) || getApiListEndReached(getState(), modelName)) return;
		await dispatch(fetchApiList(modelName, apiMethod, paramsData));
		dispatch(incrementPage());
	}
};

export function fetchApiList(modelName, apiMethod, paramsData = {}) {
	return async (dispatch, getState) => {
		dispatch(fetchApiListBegin(modelName));
		let paginationData = getApiListPaginationData(getState(), modelName);
		return ApiService[apiMethod]({...paginationData, ...paramsData})
			.then (
				result => {
					let normalized = normalizeById(result.results, paramsData.keyId);
					dispatch(fetchApiListSuccess(normalized, modelName));
					return normalized;
				},
				error => {
					dispatch(fetchApiListFailure(error, modelName));
					throw ({ error, message: 'Unable to get apiList'});
				}
			);
	}
};

export function reloadApiList(modelName, apiMethod, paramsData = {}) {
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(fetchApiListBegin());
		let paginationData = getApiListPaginationData(getState(), modelName);
		return ApiService[apiMethod]({...paramsData, ...paginationData})
			.then (
				result => {
					let normalized = normalizeById(result.results, paramsData.keyId);
					dispatch(resetApiList(modelName));
					dispatch(fetchApiListSuccess(normalized, modelName));
					dispatch(incrementPage(modelName));
					return normalized;
				},
				error => {
					dispatch(fetchApiListFailure(error, modelName));
					throw ({ error, message: 'Unable to get apiList'});
				}
			);
	}
}


export const incrementPage = ( modelName ) => ({
	type: INCREMENT_API_LIST_PAGE,
	name: modelName
});

export const resetPagination = ( modelName ) => ({
	type: RESET_API_LIST_PAGINATION,
	name: modelName
});

export const resetApiList = ( modelName ) => ({
	type: RESET_API_LIST,
	name: modelName
});

export const fetchApiListBegin = ( modelName ) => ({
	type: FETCH_API_LIST_BEGIN,
	name: modelName
});

export const fetchApiListSuccess = (apiList, modelName) => ({
	type: FETCH_API_LIST_SUCCESS,
	payload: { apiList },
	name: modelName
});

export const fetchApiListFailure = (error, modelName) => ({
	type: FETCH_API_LIST_FAILURE,
	payload: { error },
	name: modelName
});