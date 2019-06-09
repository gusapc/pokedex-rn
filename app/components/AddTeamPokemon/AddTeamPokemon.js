import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './AddTeamPokemonStyle';
import ActionSheet from 'react-native-actionsheet'
import { Feather } from '@expo/vector-icons';
import { Colors } from 'pokedex-rn/app/styles';

export default class AddTeamPokemon extends Component {


	showActionSheet = () => {
		this.ActionSheet.show();
	}

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
				<ActionSheet
					ref={o => this.ActionSheet = o}
					title={'Which one do you like ?'}
					options={['Apple', 'Banana', 'cancel']}
					cancelButtonIndex={2}
					destructiveButtonIndex={1}
					onPress={(index) => { /* do something */ }}
				/>
			</View>
		);
	}
}
