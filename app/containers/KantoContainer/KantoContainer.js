import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
	getIsLoadingKanto,
	getKanto,
	getErrorKanto,
} from 'pokedex-rn/app/reducers';
import { getKantoData } from 'pokedex-rn/app/actions/KantoActions';

import ApiMapContainer from 'pokedex-rn/app/containers/ApiMapContainer';
import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';
import NavigationService from 'pokedex-rn/app/services/NavigationService';
import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';
import Divider from 'pokedex-rn/app/components/Divider';
import { View } from 'react-native';
export default function KantoContainer (props) {	


	const dispatch = useDispatch();
	const isLoading = useSelector(getIsLoadingKanto);
	const kantoData = useSelector(getKanto);
	const error = useSelector(getErrorKanto);
	const loadData = () => dispatch(getKantoData({regionId: 2}));

	const renderItem = (item, index) => {
		const pokeName = item.pokemon_species.name.charAt(0).toUpperCase() + item.pokemon_species.name.slice(1);
		return (
			<ColumnsIconArrow 
				isImgRight={true}
				imgUrlRight={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.entry_number}.png`}
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

	return(
		<ApiMapContainer  
			loadData={() => loadData()}
			data={kantoData.pokemon_entries}
			renderItem={renderItem}
			ItemSeparatorComponent={() => (<Divider/>)}
			isLoading={isLoading}
			error={error}
			keyId={'entry_number'}
		/>
	);
}