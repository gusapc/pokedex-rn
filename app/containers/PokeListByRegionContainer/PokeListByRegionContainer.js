import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApi } from 'pokedex-rn/app/actions/ApiActions';
import { View } from 'react-native';
import { 
	getCreateApiReducerData,
	getCreateApiReducerIsLoading,
	getCreateApiReducerError
} from 'pokedex-rn/app/reducers';

import ApiMapContainer from 'pokedex-rn/app/containers/ApiMapContainer';
import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';
// import NavigationService from 'pokedex-rn/app/services/NavigationService';
// import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';
import Divider from 'pokedex-rn/app/components/Divider';

export default function PokeListByRegionContainer (props) {

	const dispatch = useDispatch();
	const isLoading = useSelector((state) => getCreateApiReducerIsLoading(state, props.modelName));
	const data = useSelector((state) => getCreateApiReducerData(state, props.modelName));
	const error = useSelector((state) => getCreateApiReducerError(state, props.modelName));
	const loadData = () => dispatch(fetchApi(props.modelName, 'getPokeListByRegion', {regionId: props.regionId}));

	const renderItem = (item, index) => {
		const pokeName = item.pokemon_species.name.charAt(0).toUpperCase() + item.pokemon_species.name.slice(1);
		let preRegionSize = {
			Johto: 151,
			Hoenn: 251,
			Sinnoh: 386,
			Unova: 493,
		}
		if(props.modelName)
		return (
			<ColumnsIconArrow 
				isImgRight={true}
				imgUrlRight={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1 + preRegionSize[props.modelName]}.png`}
				iconLeft={'aperture'}
				title={pokeName}
				color={'darkest'}
				onPress={() =>{
					// this.props.fetchtPokemon(item.pokemon_species.name);
					// NavigationService.navigate('PokemonDetilsScreen', {
					// 	pokeName: pokeName
					// });
				}}
			/>
		)
	}

	return (
		<View> 
			<ApiMapContainer  
				loadData={() => loadData()}
				data={data.pokemon_entries}
				renderItem={renderItem}
				ItemSeparatorComponent={() => (<Divider/>)}
				isLoading={isLoading}
				error={error}
				keyId={'entry_number'}
			/>
		</View>
	);
}