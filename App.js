import 'pokedex-rn/config/ReactotronConfig';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/Router';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Provider } from 'react-redux';
import Store from 'pokedex-rn/app/Store.js';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from 'pokedex-rn/app/Store.js';
import { Feather } from '@expo/vector-icons';
import NavigationService from 'pokedex-rn/app/services/NavigationService';
function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends Component {
	state = {
		isReady: false
	}

	async _cacheResourcesAsync() {
		const images = [
			require('pokedex-rn/assets/gball.png'),
			require('pokedex-rn/assets/splash.png'),
		];
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		const fontAssets = cacheFonts([Feather.font]);

		return Promise.all([ ...cacheImages, ...fontAssets ]);

	}
	
	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this._cacheResourcesAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}
		return (
			<Provider store={Store}>
				<PersistGate persistor={persistor}>
					<View style={styles.container}>
						<AppNavigator 
							ref={navigatorRef => {
								NavigationService.setTopLevelNavigator(navigatorRef);
							}}
						/>
					</View>
				</PersistGate>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});
