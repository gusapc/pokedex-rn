import React, { Component } from 'react';
import {
	View,
	Text,
	ActivityIndicator
} from 'react-native';

import PropTypes from 'prop-types';
import EmptyState from 'pokedex-rn/app/components/EmptyState';
import ErrorState from 'pokedex-rn/app/components/ErrorState';
import { Colors } from 'pokedex-rn/app/styles';

export default class ApiMapContainer extends Component {	
	componentDidMount () {
		this.loadData();
	}

	loadData = () => {
		this.props.loadData();
	}
	render() {
		let components = this.props.data.map((item, index) => (
				<React.Fragment key={`${item[this.props.id]}${index}`}>
					{this.props.renderItem(item, index)}
					{this.props.ItemSeparatorComponent ? this.props.ItemSeparatorComponent() : null}
				</React.Fragment>
			)
		);
		if (this.props.isLoading) components = (<ActivityIndicator size="large" color={Colors.red} />);
		else if (!components.length > 0 && this.props.error === '') components = (<EmptyState />);
		else if (this.props.error !== '' && this.props.data.length === 0) components = (<ErrorState />);
		return (
			<React.Fragment>
				{
					components
				}
			</React.Fragment>
		);
	}
}
ApiMapContainer.propTypes = {
	data: PropTypes.array,
	isLoading: PropTypes.bool,
	loadData: PropTypes.func.isRequired,
	renderItem: PropTypes.func.isRequired,
}

ApiMapContainer.defaultProps = {
	data: [],
	noComments: '',
	isLoading: false,
	emptyTitle: 'emptyState.title',
	emptySubitle: 'emptyState.subtitle'
	//title: {<View />}
}

