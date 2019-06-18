import React from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query-hooks';
import ApiService from 'pokedex-rn/app/services/ApiService';
import ApiMapContainer from 'pokedex-rn/app/containers/ApiMapContainer';
import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';
import Divider from 'pokedex-rn/app/components/Divider';
import NavigationService from 'pokedex-rn/app/services/NavigationService';

import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';

export default function SinnohContainer (props){	

	const dispatch = useDispatch();

	let pokeListSinnoh = useQuery(() => ApiService.getPokeListByRegion({regionId: 6}));
	
	const renderItem = (item, index) => {
		const pokeName = item.pokemon_species.name.charAt(0).toUpperCase() + item.pokemon_species.name.slice(1);
		return (
			<ColumnsIconArrow 
				isImgRight={true}
				imgUrlRight={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${386+ item.entry_number}.png`}
				iconLeft={'aperture'}
				title={pokeName}
				color={'darkest'}
				onPress={() =>{
					dispatch(fetchtPokemon(item.pokemon_species.name));
					NavigationService.navigate('PokemonDetilsScreen', {
						pokeName: pokeName
					});
				}}
			/>
		)
	}
	return (
		<ApiMapContainer  
			loadData={() => {}}
			data={pokeListSinnoh.result? pokeListSinnoh.result.pokemon_entries:[]}
			renderItem={renderItem}
			ItemSeparatorComponent={() => (<Divider/>)}
			isLoading={pokeListSinnoh.isLoading}
			error={pokeListSinnoh.error}
			keyId={'entry_number'}
		/>
	);
}


// isLoading={k.isLoading}
// 		isReloading={k.isReloading}
// 		onRefresh={k.refetch}
// 		refreshing={k.isReloading}
// 		error={k.error}