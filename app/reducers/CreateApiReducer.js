import {
	GET_FROM_API_BEGIN,
	GET_FROM_API_SUCCESS,
	GET_FROM_API_FAILURE,
	SET_DATA
} from 'pokedex-rn/app/actions/ApiActions';

const initialState = {
	data: {},
	isLoading: false,
	error: '' 
};

export default function CreateApiReducer (modelName) {
	return function ApiReducer(state = initialState, action) {
		const { name } = action;
		if (name !== modelName) return state;

		switch (action.type) {
			case GET_FROM_API_BEGIN:
				return {
					...state,
					isLoading: true
				}
			case SET_DATA:
			case GET_FROM_API_SUCCESS:
				return {
					...state,
					data: action.payload.data,
					isLoading: false
				}
			case GET_FROM_API_FAILURE:
				return {
					...state,
					error: action.payload.error.status,
					isLoading: false
				}
			default:
				return state;
		}
	}
};

export const getCreateApiReducerData = state => {
	return state.data
}

export const getCreateApiReducerIsLoading = state => {
	return state.isLoading
}


export const getCreateApiReducerError = state => {
	return state.error
}