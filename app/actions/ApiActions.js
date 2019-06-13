import ApiService from 'pokedex-rn/app/services/ApiService';

export const GET_FROM_API_BEGIN = 'GET_FROM_API_BEGIN';
export const GET_FROM_API_SUCCESS = 'GET_FROM_API_SUCCESS';
export const GET_FROM_API_FAILURE = 'GET_FROM_API_FAILURE';
export const SET_DATA = 'SET_DATA';
///import { getCreateApiReducerData } from 'pokedex-rn/app/reducers'

export function fetchApi (modelName, apiMethod, paramsData = {}) {
	return async (dispatch, getState) => {
		dispatch(fetchApiBegin(modelName));
		return ApiService[apiMethod](paramsData)
			.then(
				result => {
					dispatch(fetchApiSuccess(modelName, result));
				},
				error => {
					dispatch(fetchApiFailure(modelName, error));
					throw ({error: error});
				}
			)
	};
}



// Action: Function that returns an object with action data for reducer
export const fetchApiBegin = (modelName) => ({
	type: GET_FROM_API_BEGIN,
	name: modelName
});
export const fetchApiSuccess = (modelName, data) => ({
	type: GET_FROM_API_SUCCESS,
	name: modelName,
	payload: { data }
});
export const setData = (modelName, data) => ({
	type: SET_DATA,
	name: modelName,
	payload: { data }
});
export const fetchApiFailure = (modelName, error) => ({
	type: GET_FROM_API_FAILURE,
	name: modelName,
	payload: { error }
});


// export function setFriend (modelName, data) {
// 	return async (dispatch, getState) => {
// 		let pokeTeam = {};
// 		try {
// 			pokeTeam = JSON.parse(data);
// 		} catch {
// 			alert('Codigo no valido');
// 			return;
// 		}
// 		let trainerName = '';
// 		let onekey = false;
// 		for(let key in pokeTeam) {
// 			trainerName = key
// 			if(!onekey) onekey = true;
// 			else {
// 				alert('Codigo no valido');
// 				return;
// 			}

// 		}
// 		if(!Array.isArray(pokeTeam[trainerName])){
// 			alert('Codigo no valido');
// 			return;
// 		}
// 		let error = false;
// 		pokeTeam[trainerName].map( i => {
// 			if(i.name) if( typeof i.name !== 'string') error = true;
// 		});
// 		if (error){ 
// 			alert('Codigo no valido');
// 			return;
// 		}
// 		let allTeams = {...getCreateApiReducerData(getState(), 'PokeTeams')};
// 		let newTeam = {}
// 		newTeam[trainerName] = []
// 		pokeTeam[trainerName].map( async i => {
// 			await ApiService.getPokemon(i.name).then(
// 				result => {
// 					delete result.moves
// 					newTeam[trainerName].push(result);
// 					dispatch(setData(modelName, {...allTeams, ...newTeam}));
// 				},
// 				error => {
// 					error = true;
// 					return;
// 				}
// 			)
// 		});

// 	};
// }