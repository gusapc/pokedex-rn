import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from 'pokedex-rn/app/Store.js';
import 'pokedex-rn/config/ReactotronConfig'
import NavigationService from 'pokedex-rn/app/services/NavigationService';

import AppNavigator from './app/Router';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<AppNavigator 
						ref={navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
