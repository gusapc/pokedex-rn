import React from 'react';
import { useQuery } from 'react-query-hooks';
import {
	FlatList,
	RefreshControl,
} from 'react-native';

import { connect } from "react-redux";
import ApiService from 'pokedex-rn/app/services/ApiService';
import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';
import Divider from 'pokedex-rn/app/components/Divider';
import ErrorState from 'pokedex-rn/app/components/ErrorState';

import EmptyState from 'pokedex-rn/app/components/EmptyState';

export default function KalosContainer (props) {	

	const PAGE_SIZE = 50
	
	const pokeListKalos = useQuery(() => ApiService.getPokeList({ offset: 649, limit: PAGE_SIZE }));

	const updateParams = ({ result }) => {
		return { offset: result.data.results.length }
	}

	const updateResult = (oldResult, newResult) => {
		return { 
			data: {
				results: oldResult.data.results.concat(newResult.data.results)
			}
		}
	}

	const renderItem = ({item, index}) => {

		const pokeName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
		return (
			<ColumnsIconArrow 
				isImgRight={true}
				imgUrlRight={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${650 + index}.png`}
				iconLeft={'aperture'}
				title={pokeName}
				color={'darkest'}
				onPress={() =>{
					// this.props.fetchtPokemon(item.name);
					// NavigationService.navigate('PokemonDetilsScreen', {
					// 	pokeName: pokeName
					// });
				}}
			/>
		)
	}


	return (
		<FlatList 
			data={pokeListKalos.result ? pokeListKalos.result.results : []}
			renderItem={renderItem}
			keyExtractor={poke => String(poke.name)}
			ItemSeparatorComponent={() => (<Divider/>)}
			//onEndReached={() => pokeListKalos.fetchMore({ updateParams, updateResult })}
			ListEmptyComponent={() =>{
				if(pokeListKalos.error) return (<ErrorState/>);
				if(!pokeListKalos.isLoading) return (<EmptyState/>);
				return null;
			}}
			refreshControl={
				<RefreshControl
					refreshing={pokeListKalos.isRefreshing}
					onRefresh={() => pokeListKalos.refetch() }
				/>
			}
		/> 
	);
}
