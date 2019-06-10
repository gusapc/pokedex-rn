export const SET_AUTH_INFO = 'SET_AUTH_INFO';

export const setAuthInfo = (data) => ({
	type: SET_AUTH_INFO,
	payload: { data }
});