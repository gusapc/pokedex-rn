import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from 'pokedex-rn/app/services/ApiService';
import axios from 'axios';

import { useQuery } from 'react-query-hooks';
import {
	View,
	Text,
} from 'react-native';

import { connect } from 'react-redux';
import { fetchJohto } from 'pokedex-rn/app/actions/JohtoActions';
import { getJohto } from 'pokedex-rn/app/reducers';
import ApiMapContainer from 'pokedex-rn/app/containers/ApiMapContainer';
import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';
import Divider from 'pokedex-rn/app/components/Divider';
import NavigationService from 'pokedex-rn/app/services/NavigationService';

import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';

export default function JohtoContainer (props){	
	

	let dispatch = useDispatch();
	let pokeListJohto = useQuery(() => dispatch(fetchJohto()));
	let johtoPokes = useSelector(getJohto);

	const renderItem = (item, index) => {
		const pokeName = item.pokemon_species.name.charAt(0).toUpperCase() + item.pokemon_species.name.slice(1);
		return (
			<ColumnsIconArrow 
				isImgRight={true}
				imgUrlRight={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${151+ item.entry_number}.png`}
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
			data={johtoPokes}
			renderItem={renderItem}
			ItemSeparatorComponent={() => (<Divider/>)}
			isLoading={pokeListJohto.isLoading}
			error={pokeListJohto.error}
			keyId={'entry_number'}
		/>
	);
}

