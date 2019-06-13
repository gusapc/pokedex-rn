import {
	FETCH_API_LIST_BEGIN,
	FETCH_API_LIST_SUCCESS,
	FETCH_API_LIST_FAILURE,
	INCREMENT_API_LIST_PAGE,
	RESET_API_LIST,
	RESET_API_LIST_PAGINATION,
} from 'pokedex-rn/app/actions/ApiListActions';

const PAGE_SIZE = 100;

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	limit: PAGE_SIZE,
	offset: 0,
	endReached: false
}

export default function CreateApiReducer (modelName) {
	return function ApiReducer(state = initialState, action) {
		const { name } = action;
		if (name !== modelName) return state;
		switch(action.type){
			case FETCH_API_LIST_BEGIN:
				return {
					...state,
					isLoading: true,
					error: ''
				}
			case FETCH_API_LIST_SUCCESS:
				let allIds = [...new Set(state.allIds.concat(action.payload.apiList.allIds))];
				let byId = {
					...state.byId,
					...action.payload.apiList.byId
				};
				return{
					...state,
					allIds,
					byId,
					isLoading: false,
					offset: state.offset + PAGE_SIZE,
					endReached: action.payload.apiList.allIds.length < PAGE_SIZE
				}
			case FETCH_API_LIST_FAILURE:
				return{
					...state,
					isLoading: false,
					error: action.payload.error,
				}
			case INCREMENT_API_LIST_PAGE:
				return{
					...state,
					offset: state.offset + PAGE_SIZE,
				}
			case RESET_API_LIST_PAGINATION:
				return{
					...state,
					offset: initialState.offset,
					limit: initialState.limit
				}
			case RESET_API_LIST:
				return{
					...initialState
				}
			default:
				return state
		}
	}
};

export const getIsLoadingApiList = state => {
	return state.isLoading;
}
export const getIsRefreshingApiList = state => {
	return state.isLoading && (state.offset === 0);
}
export const getErrorApiList = state => {
	return state.error;
}
export const getApiListData = state => {
	return state.allIds.map(id => state.byId[id]);
}
export const getApiListPaginationData = state => {
	return { offset: state.offset, limit: state.limit }
}
export const getApiListEndReached = state => {
	return state.endReached;
}
