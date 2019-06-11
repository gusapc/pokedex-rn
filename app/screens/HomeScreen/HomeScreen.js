import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	View,
	TouchableOpacity,
	FlatList,
	RefreshControl
} from 'react-native';

import styles from './HomeScreenStyle';
import { fetchPokemonListBatch, reloadPokemonList} from 'pokedex-rn/app/actions/PokemonListActions';

import { 
	getIsLoadingPokemonList,
	getIsRefreshingPokemonList,
	getPokemonList,
	getErrorPokemonList
} from 'pokedex-rn/app/reducers';

import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import TitleText from 'pokedex-rn/app/components/TitleText';
import Divider from 'pokedex-rn/app/components/Divider';
import ErrorState from 'pokedex-rn/app/components/ErrorState';
import EmptyState from 'pokedex-rn/app/components/EmptyState';
import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';

export default function HomeScreen (props) {

	useEffect(() => {
		loadData();
	}, []);
	
	const dispatch = useDispatch();
	const isLoading = useSelector(getIsLoadingPokemonList);
	const isRefreshing = useSelector(getIsRefreshingPokemonList);
	const pokeList = useSelector(getPokemonList);
	const error = useSelector(getErrorPokemonList);

	const loadData = () => {
		dispatch(fetchPokemonListBatch())
	};

	renderItem = ({ item, index}) => {
		const pokeName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
		const numImg = index + 1;
		return (
			<ColumnsIconArrow 
				isImgRight={true}
				imgUrlRight={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numImg}.png`}
				iconLeft={'aperture'}
				title={pokeName}
				color={'darkest'}
				onPress={() =>{
					alert(item.name);
					// this.props.fetchtPokemon(item.name);
					// NavigationService.navigate('PokemonDetilsScreen', {
					// 	pokeName: pokeName
					// });
				}}
			/>
		)
	}

	return (
		<View style={styles.container}>
			<HeaderNav
				left={
					<TouchableOpacity
						onPress={() => props.navigation.openDrawer()}
						style={styles.marginHorizontal}
						activeOpacity={0.6}
					>
						<TitleText text={'Pokedex Nacional ▼'} color='darkest' weight='medium'/>
					</TouchableOpacity>
				}
			/>
			<FlatList 
				data={pokeList}
				renderItem={renderItem}
				keyExtractor={poke => String(poke.name)}
				ItemSeparatorComponent={() => (<Divider/>)}
				onEndReached={() => loadData()}
				ListEmptyComponent={() =>{
					if(error != '') return (<ErrorState/>);
					if(!isRefreshing) return (<EmptyState/>);
					return null;
				}}
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={() => dispatch(reloadPokemonList())}
					/>
				}
			/> 
		</View>
	);
}
