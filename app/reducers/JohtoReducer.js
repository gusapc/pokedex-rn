import {
	ADD_DATA_JOHTO,
} from 'pokedex-rn/app/actions/JohtoActions';

const initialState = {
	byId: {},
	allIds: []
};

export default function JohtoReducer (state = initialState, action) {
	switch (action.type) {
		case ADD_DATA_JOHTO:
			let allIds = [...new Set(state.allIds.concat(action.payload.data.allIds))];
			let byId = {
				...state.byId,
				...action.payload.data.byId
			};
			return {
				...state,
				allIds,
				byId,
			};
		default:
			return state;
	}
};

export const getJohto= state => {
	return state.allIds.map( id => state.byId[id] );
}
