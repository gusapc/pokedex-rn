import { SET_AUTH_INFO } from 'pokedex-rn/app/actions/AuthActions';

const initialState = {
	username: '',
	password: '',
	loggedIn: false,
	avatar: '',
	firstName: '',
	lastName: ''
};

export default function AuthReducer (state = initialState, action) {
	switch (action.type) {
		case SET_AUTH_INFO:
			return {
				...state,
				...action.payload.data
			}
		default:
			return state;
	}
};

export const getAuthData = state => {
	return state
}
