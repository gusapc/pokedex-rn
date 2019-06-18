import React, { Component } from 'react';
import {
	View,
	Text,
	ActivityIndicator,
	Button,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import styles from './PokemonDetilsScreenStyle';
import PokemonContainer from 'pokedex-rn/app/containers/PokemonContainer';
import EmptyState from 'pokedex-rn/app/components/EmptyState';
import ErrorState from 'pokedex-rn/app/components/ErrorState';
import { Colors } from 'pokedex-rn/app/styles';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import AddTeamPokemon from 'pokedex-rn/app/components/AddTeamPokemon';
import TitleText from 'pokedex-rn/app/components/TitleText';
import PrimaryBtn from 'pokedex-rn/app/components/PrimaryBtn';
import RowDoubleText from 'pokedex-rn/app/components/RowDoubleText';
import Divider from 'pokedex-rn/app/components/Divider';
import { VictoryChart, VictoryArea, VictoryPolarAxis, VictoryTheme } from 'victory-native';

export default class PokemonDetilsScreen extends Component {	
	
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('pokeName', 'Pokemon'),
			headerStyle: {
				backgroundColor: Colors.red,
			},
			headerTintColor: Colors.black,
				headerTitleStyle: {
					fontWeight: 'bold',
			},
			headerRight: (
				<AddTeamPokemon />
			),
		};
	};

	state = {
		pokeName: ''
	}

	isEmpty(obj) {
		for(let key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}

	componentDidMpunt(){
		const { navigation } = this.props;
		let pokeName = navigation.getParam('pokeName', 'Pokemon');
		this.props.navigation.setParams({
			pokeName: pokeName,
		});
		this.setState({pokeName: pokeName})
	}

	render() {
		const { navigation } = this.props;
		let pokeName = navigation.getParam('pokeName', 'Pokemon');
		return (
			<View style={[styles.container, styles.justifyContentCenter, styles.alignItemsCenter]}>
				<PokemonContainer pokeName={pokeName}>
				{(isLoading, error, pokemon, fetchtPokemon, setData, authData) => {

					console.log(isLoading);

					if(isLoading)  return (
						<View style={[styles.container, styles.justifyContentCenter, styles.baseHorizontalMargin]}>
							<ActivityIndicator size="large" color={Colors.red} />
						</View>
					);
					if(error != '' || this.isEmpty(pokemon)) return (
						<View style={[styles.justifyContentCenter, styles.baseHorizontalMargin, styles.baseVerticalMargin]}>
							<ErrorState />
							<PrimaryBtn 
								text='Recargar'
								color='white'
								backgroundColor='red'
								onPress={() => fetchtPokemon(pokeName)}
							/>

						</View>
					);

					return (
							<ScrollView>
								<View style={styles.container} >
									<Image
										resizeMode= 'cover'
										style={{height: 200, width: '100%'}}
										source={ pokemon.sprites.front_default ? {uri: pokemon.sprites.front_default} : require('pokedex-rn/assets/gball.png')}
									/>
									{
										pokemon.forms.map((item, index) => (
											<React.Fragment key={'name' + index}>
												<RowDoubleText
													title={'Name'}
													subtitle={item.name? item.name: '--'}
												/>
												<Divider/>
											</React.Fragment>
										))
									}
									{
										pokemon.types.map((item, index) => (
											<React.Fragment key={'types' + index}>
												<RowDoubleText
													title={'Type'}
													subtitle={item.type.name? item.type.name: '--'}
												/>
												<Divider/>
											</React.Fragment>
										))
									}
									{
										pokemon.abilities.map((item, index) => (
											<React.Fragment key={'ability' + index}>
												<RowDoubleText
													title={'Ability'}
													subtitle={item.ability.name? item.ability.name: '--'}
												/>
												<Divider/>
											</React.Fragment>
										))
									}
									<RowDoubleText
										title={'Base Experience'}
										subtitle={pokemon.base_experience? pokemon.base_experience + '' : '--'}
									/>
									<Divider/>
									{
										pokemon.game_indices.reverse().map((item, index) => (
											<React.Fragment key={'game_indices' + index}>
												<RowDoubleText
													title={`Game ${(index + 1)}`}
													subtitle={item.version.name? item.version.name: '--'}
												/>
												<Divider/>
											</React.Fragment>
										))
									}
									<RowDoubleText
										title={'Stats'}
										subtitle={''}
									/>
									<VictoryChart polar
										theme={VictoryTheme.material}
										>
										<VictoryArea data={pokemon.stats.map(i => i.base_stat)} />
										<VictoryPolarAxis/>
									</VictoryChart>
									<View style={{height: 100}} />
									<Divider/>
								</View>
							</ScrollView>
					);
				}}
				</PokemonContainer>
			</View>
		);
	}
}
							

///<Text>{'Nombre: ' + (pokemon.forms ? pokemon.forms[0].name : '----')}</Text>
