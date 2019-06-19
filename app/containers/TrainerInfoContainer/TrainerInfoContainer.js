import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import { 
	getCreateApiReducerData,
	getAuthData
} from 'pokedex-rn/app/reducers';
import QRCode from 'react-native-qrcode';
import EmptyState from 'pokedex-rn/app/components/EmptyState';

class TrainerInfoContainer extends Component {	

	isEmpty(obj) {
		for(let key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}


	render() {
		let pokemon = []
		if(this.props.teams[this.props.authData.username]) pokemon = this.props.teams[this.props.authData.username].filter( i =>  i.name);
		if(pokemon.length === 0) return (<EmptyState />);
		let trainer = {};
		trainer[this.props.authData.username] = pokemon.map(i => {
			return {
				name: i.name
			}
		});
		let trinerInfo = JSON.stringify(trainer);
		console.log(trinerInfo);
		return (
			<QRCode
				value={trinerInfo}
				size={200}
				bgColor='black'
				fgColor='white'
			/>
		);
	}
}

mapStateToProps = state => ({
	authData: getAuthData(state),
	teams: getCreateApiReducerData(state, 'PokeTeams')
})

export default connect(mapStateToProps)(TrainerInfoContainer);
