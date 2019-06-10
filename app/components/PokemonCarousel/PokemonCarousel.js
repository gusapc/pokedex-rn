import React from 'react';
import {
	View,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './PokemonCarouselStyle';
import Carousel from 'react-native-banner-carousel';
import CircleImg from 'pokedex-rn/app/components/CircleImg';
import { Metrics } from 'pokedex-rn/app/styles';
import BodyText from 'pokedex-rn/app/components/BodyText';
import NavigationService from 'pokedex-rn/app/services/NavigationService';

const BannerWidth = Dimensions.get('window').width;

export default function PokemonCarousel (props){

	renderPage = (item, indexTop) => {
		return (
			<View style={styles.pokemonsGroup} key={indexTop}>
				{item.map((pokemon, index) =>
					<TouchableOpacity 
							onPress={() =>{
								if(pokemon.name === '') return;
								props.onPress(pokemon.name);
								NavigationService.navigate('PokemonDetilsScreen', {
									pokeName: pokemon.name
								});
							}}
							style={[styles.baseHorizontalMargin, styles.pokemonContainer]}
							key={`${indexTop}${index}`}
						>

						<CircleImg
							image={pokemon.img}
							size='Huge'
						/>
						<BodyText
							color='dark'
							weight='bold'
							text={pokemon.name}
						/>
					</TouchableOpacity>
				)}
			</View>
		);
	}

	let div = Math.ceil(Dimensions.get('window').width/(Metrics.circleIcons.huge*2));
	let team = [];
	let id = 0;
	let pokemon = props.data;


	for (let i = 0; i < (pokemon.length / div); i++) {
		let group = [];
		for(let j = 0; j < div; j++){
			group.push((typeof pokemon[id] === 'undefined')? {
				id: id + 1,
				img: '',
				name: '' } :pokemon[id]);
			id++;
		}
		team.push(group);
	}

	return (
		<View style={styles.marginVertical} >
			<Carousel
				pageSize={BannerWidth}
				loop
				index={0}
				autoplay={true}
				autoplayTimeout={2500}
				showsPageIndicator={false}
			>
					{team.map((item, index) => renderPage(item, index))}
			</Carousel>
	  </View>
	);
}

PokemonCarousel.propTypes = {
	data: PropTypes.array
}

PokemonCarousel.defaultProps = {
	data: []
}