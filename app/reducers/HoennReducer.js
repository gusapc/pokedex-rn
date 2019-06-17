import {
	ADD_DATA_HOENN,
} from 'pokedex-rn/app/actions/HoennActions';

const initialState = {
	byId: {},
	allIds: []
};

export default function HoennReducer (state = initialState, action) {
	switch (action.type) {
		case ADD_DATA_HOENN:
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

export const getHoenn= state => {
	return state.allIds.map( id => state.byId[id] );
}
