// // Action names should be imported from their respective action modules
// import {
// 	GET_ITEM_BEGIN,
// 	GET_ITEM_SUCCESS,
// 	GET_ITEM_FAILURE
// } from 'pokedex-rn/app/actions/item-actions';

// Example initial state
const initialState = {
	items: [],
	isLoading: false,
	error: '' 
};

// Return a new state object with updated attributes
export default function ExampleReducer (state = initialState, action) {
	switch (action.type) {
		// case GET_ITEM_BEGIN:
		// 	return {
		// 		...state,
		// 		isLoading: true
		// 	}
		// case GET_ITEM_SUCCESS:
		// 	return {
		// 		...state,
		// 		items: action.payload.data.items,
		// 		isLoading: false
		// 	}
		// case GET_ITEM_FAILURE:
		// 	return {
		// 		...state,
		// 		error: action.payload.error.status,
		// 		isLoading: false
		// 	}
		default:
			return state;
	}
};

