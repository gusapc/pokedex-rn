import axios from 'axios';

export default {
	
	pokehost: 'https://pokeapi.co/api/v2/',


	getPokeList(params = {}) {
		let { limit, offset } = params;
		data = {
			limit,
			offset
		};
		const queries = this.makeQueryParams(data);
		const url = `${this.pokehost}pokemon?${queries}`;
		const method = 'GET';
		return this.makeRequest({url, method});
	},

	getPokeListByRegion(params = {}) {
		const url = `${this.pokehost}pokedex/${params.regionId}`;
		const method = 'GET';
		return this.makeRequest({url, method});
	},

	makeQueryParams (params) {
		let queries = '';
		for(var key in params){
			queries += `${key}=${params[key]}&`;
		}
		return queries;
	},

	async makeRequest(requestData={}) {
		let res = await axios(requestData);
		return res.data;
	},
};

