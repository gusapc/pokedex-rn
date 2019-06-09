// Declare action names as constants with uppercase string
export const GET_ITEM_BEGIN = 'GET_ITEM_BEGIN';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

// Thunk: this is a special type of action that can dispatch other actions
export function getItems() {
	return async dispatch => {
		dispatch(getItemsBegin());
		await SomeApiService.getUserList()
			.then(
				result => {
					dispatch(getItemsSuccess(result));
				},
				error => {
					dispatch(getItemsFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

// Action: Function that returns an object with action data for reducer
export const getItemsBegin = () => ({
	type: GET_ITEMS_BEGIN
});
export const getItemsSuccess = data => ({
	type: GET_ITEMS_SUCCESS,
	payload: { data }
});
export const getItemsFailure = error => ({
	type: GET_ITEMS_FAILURE,
	payload: { error }
});

