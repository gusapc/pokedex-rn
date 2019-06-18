import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query-hooks';
import { FlatList, RefreshControl} from 'react-native';

import ApiService from 'pokedex-rn/app/services/ApiService';
import { fetchHoenn } from 'pokedex-rn/app/actions/HoennActions';
import { getHoenn } from 'pokedex-rn/app/reducers';

import Divider from 'pokedex-rn/app/components/Divider';
import ErrorState from 'pokedex-rn/app/components/ErrorState';
import EmptyState from 'pokedex-rn/app/components/EmptyState';
import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';
import NavigationService from 'pokedex-rn/app/services/NavigationService';
import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';

export default function HoennContainer (props) {	

	const PAGE_SIZE = 50
	
	let dispatch = useDispatch();


	let pokeListHoenn = useQuery(async () => await dispatch(fetchHoenn({ offset: 251, limit: PAGE_SIZE })));

	let hoennPokes = useSelector(getHoenn);

	const updateParams = ({result}) => {
		return { offset: 251 + hoennPokes.length }
	}

	const updateResult = (oldResult, newResult) => {
		fetchHoenn({ offset: 251 + hoennPokes.length, limit: PAGE_SIZE })
		return { 
			data: {}
		}
	}

	renderItem = ({ item, index }) => {
		const pokeName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
		const numImg = 251 + index;
		return (
			<ColumnsIconArrow 
				isImgRight={true}
				imgUrlRight={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numImg}.png`}
				iconLeft={'aperture'}
				title={pokeName}
				color={'darkest'}
				onPress={() =>{
					dispatch(fetchtPokemon(item.name));
					NavigationService.navigate('PokemonDetilsScreen', {
						pokeName: pokeName
					});
				}}
			/>
		)
	}

	return (
		<FlatList 
			data={hoennPokes}
			renderItem={renderItem}
			keyExtractor={poke => String(poke.name)}
			ItemSeparatorComponent={() => (<Divider/>)}
			onEndReached={() => pokeListHoenn.fetchMore({ updateParams, updateResult })}
			ListEmptyComponent={() =>{
				if(pokeListHoenn.error) return (<ErrorState/>);
				if(!pokeListHoenn.isLoading) return (<EmptyState/>);
				return null;
			}}
			refreshControl={
				<RefreshControl
					refreshing={pokeListHoenn.isRefreshing}
					onRefresh={() => pokeListHoenn.refetch() }
				/>
			}
		/> 
	);
}


// isLoading={k.isLoading}
// isReloading={k.isReloading}
// onRefresh={k.refetch}
// refreshing={k.isReloading}
// error={k.error}
