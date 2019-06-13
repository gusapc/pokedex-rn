import React, { Component } from 'react';
import {
	FlatList,
	RefreshControl,
} from 'react-native';

import PropTypes from 'prop-types';
import EmptyState from 'pokedex-rn/app/components/EmptyState';
import ErrorState from 'pokedex-rn/app/components/ErrorState';

export default class ApiListContainer extends Component {	

	componentDidMount () {
		this.loadData();
	}

	loadData = () => {
		this.props.loadData();
	}

	onRefresh = () => {
		this.props.onRefresh();
	}
	
	onEndReached = () => {
		this.props.onEndReached();
	}

	render() {
		return (
			<FlatList
				data={this.props.data}
				keyExtractor={this.props.keyExtractor}
				renderItem={this.props.renderItem}
				ListEmptyComponent={() =>{
					if(this.props.error != '') return (<ErrorState/>);
					if(!this.props.isRefreshing) return (<EmptyState/>);
					return null;
				}}
				refreshControl={
					<RefreshControl
						refreshing={this.props.isRefreshing}
						onRefresh={this.onRefresh}
					/>
				}
				ListFooterComponent={this.props.footer}
				onEndReached={this.onEndReached}
				onEndReachedThreshold={this.props.onEndReachedThreshold}
				ListHeaderComponent={this.props.header}
			/>
		);
	}
}

ApiListContainer.propTypes = {
	data: PropTypes.array,
	keyExtractor: PropTypes.func,
	error: PropTypes.string,
	isRefreshing: PropTypes.bool,
	loadData: PropTypes.func.isRequired,
	renderItem: PropTypes.func.isRequired,
	onRefresh: PropTypes.func,
	onEndReached: PropTypes.func,
}

ApiListContainer.defaultProps = {
	data: [],
	error: '',
	isRefreshing: false,
	onEndReached: () => {},
	onRefresh: () => {},

}
