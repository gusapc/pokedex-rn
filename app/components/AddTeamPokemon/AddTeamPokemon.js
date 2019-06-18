import React, { Component } from 'react';
import { 
	Text,
	View,
	TouchableOpacity,
	 } from 'react-native';
import PropTypes from 'prop-types';

import styles from './AddTeamPokemonStyle';
import { Feather } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet'
import PokemonContainer from 'pokedex-rn/app/containers/PokemonContainer';
import { Colors } from 'pokedex-rn/app/styles';

export default class AddTeamPokemon extends Component {


	showActionSheet = () => {
		this.ActionSheet.show();
	}

	capitalLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1)
	
	render() {
		return (
			<View>
				<TouchableOpacity 
					onPress={() => {
						this.showActionSheet();
					}}
					style={styles.baseMarginRight}
				>
					<Feather 
						name={'plus'} 
						size={24} 
						color={Colors.black}
					/>
				</TouchableOpacity>
				<PokemonContainer>
				{(isLoading, error, pokemon, fetchtPokemon, setData, authData, teams) => {
					if (isLoading) return;
					//let userTeam = teams[authData.name] ? teams[authData.name] : {`${authData.name}`: };
					let userTeam;
					if(teams[authData.username]) userTeam = teams[authData.username];
					else {
						teams[authData.username] = [{},{},{},{},{},{}];
						userTeam = teams[authData.username];
					};
					let empty = 'Espacio disponible';
					let teamNames = [empty,empty,empty,empty,empty,empty];
					
					userTeam.map((item, index) => {
						if(item.forms) teamNames[index] = this.capitalLetter(item.forms[0].name);
					})
					teamNames.push('Cancelar');

					let currentPokemon = {...pokemon};

					delete currentPokemon.moves;
					
					return (
						<ActionSheet
							ref={o => this.ActionSheet = o}
							title={'Selecciona el espacio que ocupara este pokemon en tu equipo, si el espacio esta asignado se sustituira'}
							options={teamNames}
							destructiveButtonIndex={6}
							onPress={(index) => { 
								if(index === 6) return;
								teams[authData.username][index] = currentPokemon;
								setData('PokeTeams', teams);
							}}
						/>
					);
				}}
				</PokemonContainer>
			</View>
		);
	}
}

	AddTeamPokemon.propTypes = {
		// data: PropTypes.array
	}

	AddTeamPokemon.defaultProps = {
		// data: []
	}