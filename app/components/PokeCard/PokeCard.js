import React from 'react';
import {
	View,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './PokeCardStyle';
import SimpleCard from 'pokedex-rn/app/components/SimpleCard';
import CircleImg from 'pokedex-rn/app/components/CircleImg';
import TinyText from 'pokedex-rn/app/components/TinyText';
import SubtitleText from 'pokedex-rn/app/components/SubtitleText';

export default function PokeCard (props) {

	capitalLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1)

	let stats = {
		'speed': 'spd',
		'special-defense': 'sdd',
		'special-attack': 'sat',
		'defense': 'def',
		'attack': 'atk',
		'hp': 'hp'
	}
	return (
		<SimpleCard onPress={() => props.onPress()}>
			<View style={[styles.row, styles.alignCenter, styles.justifySpaceBetween]}>
				<CircleImg
					image={props.img}
					size='Huge'
				/>
				<TinyText text={capitalLetter(props.name)} color='darkest' weight='medium' align='left'/>
				<View>
				{
					props.data.map((item, index) => (
						<React.Fragment key={`${index}${props.name}`}>
							<TinyText text={`${stats[item.stat.name]}:  ${item.base_stat}`} color='darkest' weight='medium' align='left'/>
						</React.Fragment>
					))
				}
				</View>
			</View>
		</SimpleCard>
	);
}

PokeCard.propTypes = {
	onPress: PropTypes.func,
	data: PropTypes.array,
	img: PropTypes.string
}

PokeCard.defaultProps = {
	img: '',
	name: 'pokename',
	data: [
		{stat: {name: 'speed'}, base_stat: 0},
		{stat: {name: 'special-defense'}, base_stat: 0},
		{stat: {name: 'special-attack'}, base_stat: 0},
		{stat: {name: 'defense'}, base_stat: 0},
		{stat: {name: 'attack'}, base_stat: 0},
		{stat: {name: 'hp'}, base_stat: 0},
	],
	onPress: () => {}
}
