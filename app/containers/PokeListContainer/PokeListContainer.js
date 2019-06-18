import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';
import ApiListContainer from 'pokedex-rn/app/containers/ApiListContainer';
import { connect } from 'react-redux';
import { getIsRefreshingApiList, getErrorApiList, getApiListData } from 'pokedex-rn/app/reducers';
import NavigationService from 'pokedex-rn/app/services/NavigationService';
import { fetchtPokemon } from 'pokedex-rn/app/actions/PokemonActions';
import { fetchApiListBatch, reloadApiList } from 'pokedex-rn/app/actions/ApiListActions';
import Divider from 'pokedex-rn/app/components/Divider';

class PokeListContainer extends Component {	

	renderItem = ({ item, index}) => {
		const pokeName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
		let numImg = index + 1;
		if (this.props.modelName === 'PokemonListKalos') numImg = index + 650;
		if (this.props.modelName === 'PokemonListAlola') numImg = index + 722;
		return (
			<ColumnsIconArrow 
				isDivier={true}
				isImgRight={true}
				imgUrlRight={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numImg}.png`}
				iconLeft={'aperture'}
				title={pokeName}
				color={'darkest'}
				onPress={() =>{
					this.props.fetchtPokemon(item.name);
					NavigationService.navigate('PokemonDetilsScreen', {
						pokeName: pokeName
					});
				}}
			/>
		)
	}

	render() {
		let params = {
			...this.props.params,
			keyId: 'name'
		};
		return (
			<ApiListContainer
				data={this.props.PokemonList}
				keyExtractor={PokemonList => String(PokemonList.name)}
				loadData={() => this.props.fetchApiListBatch(this.props.modelName, 'getPokeList', params)}
				onRefresh={() => this.props.reloadApiList(this.props.modelName, 'getPokeList', params)}
				renderItem={this.renderItem}
				header={this.props.header}
				ItemSeparatorComponent={() => (<Divider/>)}
				ListFooterComponent={this.props.ListFooterComponent}
				onEndReached={() => this.props.fetchApiListBatch(this.props.modelName, 'getPokeList', params)}
				error={this.props.error}
				isRefreshing={this.props.isRefreshing}
			/>
		);

	}
}

mapStateToProps = (state, ownProps) => ({
	PokemonList: getApiListData(state, ownProps.modelName),
	isRefreshing: getIsRefreshingApiList(state, ownProps.modelName),
	error :getErrorApiList(state, ownProps.modelName)
})

export default connect(
	mapStateToProps, 
	{
		fetchApiListBatch,
		reloadApiList,
		fetchtPokemon
	}
)(PokeListContainer);

