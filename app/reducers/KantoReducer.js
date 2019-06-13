import {
	GET_KANTO_DATA_BEGIN,
	GET_KANTO_DATA_SUCCESS,
	GET_KANTO_DATA_FAILURE
} from 'pokedex-rn/app/actions/KantoActions';

const initialState = {
	data: {},
	isLoading: false,
	error: '' 
};

export default function KantoReducer (state = initialState, action) {
	switch (action.type) {
		case GET_KANTO_DATA_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case GET_KANTO_DATA_SUCCESS:
			return {
				...state,
				data: action.payload.data,
				isLoading: false
			}
		case GET_KANTO_DATA_FAILURE:
			return {
				...state,
				error: action.payload.error,
				isLoading: false
			}
		default:
			return state;
	}
};


export const getIsLoadingKanto = state => {
	return state.isLoading;
}

export const getKanto = (state) => {
	return state.data;
}

export const getErrorKanto = state => {
	return state.error;
}


