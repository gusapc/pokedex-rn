import setData from 'pokedex-rn/app/actions/ApiActions';

export function setFriend (data) {
	return async (dispatch, getState) => {
		let pokeTeam = {};
		try {
			pokeTeam = JSON.parse(data);
		} catch {
			alert('Codigo no valido');
			return;
		}
		let trainerName = '';
		let onekey = false;
		for(let key in pokeTeam) {
			trainerName = key
			if(!onekey) onekey = true;
			else {
				alert('Codigo no valido');
				return;
			}

		}
		if(!Array.isArray(pokeTeam[trainerName])){
			alert('Codigo no valido');
			return;
		}
		let error = false;
		pokeTeam[trainerName].map( i => {
			if(i.name) if( typeof i.name !== 'string') error = true;
		});
		if (error){ 
			alert('Codigo no valido');
			return;
		}
		let allTeams = {...getCreateApiReducerData(getState(), 'PokeTeams')};
		let newTeam = {}
		newTeam[trainerName] = []
		pokeTeam[trainerName].map( async i => {
			await ApiService.getPokemon(i.name).then(
				result => {
					delete result.moves
					newTeam[trainerName].push(result);
					dispatch(setData('PokeTeams', {...allTeams, ...newTeam}));
				},
				error => {
					error = true;
					return;
				}
			)
		});

	};
}