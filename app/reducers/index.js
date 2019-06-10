import { combineReducers } from 'redux'
import Auth, * as fromAuth from 'pokedex-rn/app/reducers/AuthReducer';

const rootReducer = combineReducers({
	Auth,
});

export default rootReducer;

export const getAuthData = state =>
	fromAuth.getAuthData(state.Auth);
