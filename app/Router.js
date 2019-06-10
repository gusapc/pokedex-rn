import React, { Component } from 'react';
import {
	Animated,
	Easing
} from 'react-native'

import { createAppContainer, createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from 'pokedex-rn/app/screens/WelcomeScreen';
import LoginScreen from 'pokedex-rn/app/screens/LoginScreen';
import AuthLoadingScreen from 'pokedex-rn/app/screens/AuthLoadingScreen';
import HomeScreen from 'pokedex-rn/app/screens/HomeScreen';
import KantoScreen from 'pokedex-rn/app/screens/KantoScreen';
import JohtoScreen from 'pokedex-rn/app/screens/JohtoScreen';
import HoennScreen from 'pokedex-rn/app/screens/HoennScreen';
import SinnohScreen from 'pokedex-rn/app/screens/SinnohScreen';
import UnovaScreen from 'pokedex-rn/app/screens/UnovaScreen';
import KalosScreen from 'pokedex-rn/app/screens/KalosScreen';
import AlolaScreen from 'pokedex-rn/app/screens/AlolaScreen';
import PokemonDetilsScreen from 'pokedex-rn/app/screens/PokemonDetilsScreen';
import FriendScanScreen from 'pokedex-rn/app/screens/FriendScanScreen';
import MyPokemonScreen from 'pokedex-rn/app/screens/MyPokemonScreen';
import FriendsScreen from 'pokedex-rn/app/screens/FriendsScreen';
import QrCodeScreen from 'pokedex-rn/app/screens/QrCodeScreen';
import BottomBar from 'pokedex-rn/app/components/BottomBar';
import RegionMenu from 'pokedex-rn/app/components/RegionMenu';
import ProfileTab from 'pokedex-rn/app/components/ProfileTab';

const ProfileTabNavigator = createMaterialTopTabNavigator({ 
	MyPokemonScreen,
	QrCodeScreen
}, {
	initialRouteName: 'MyPokemonScreen',
	swipeEnabled: true,
	tabBarComponent: ProfileTab
});

const DrawerNavigator = createDrawerNavigator({
	HomeScreen,
	KantoScreen,
	JohtoScreen,
	HoennScreen,
	SinnohScreen,
	UnovaScreen,
	KalosScreen,
	AlolaScreen,
}, {
	initialRouteName: 'HomeScreen',
	contentComponent:  RegionMenu
});

const BottomTabNavigator = createBottomTabNavigator({
	DrawerNavigator,
	FriendsScreen,
	ProfileTabNavigator,
}, {
	initialRouteName: 'DrawerNavigator',
	tabBarComponent: BottomBar
});

const MainStack = createStackNavigator({
	BottomTabNavigator: {
		screen: BottomTabNavigator,
		navigationOptions: { header: null }
	},
	PokemonDetilsScreen,
});

const MainModalStack = createStackNavigator({
	Main: { screen: MainStack },
	FriendScanModal: { screen: FriendScanScreen }
}, {
	mode: 'modal',
	headerMode: 'none'
});


const AuthStack = createStackNavigator({
	WelcomeScreen, 
	LoginScreen
}, {
	transitionConfig: () => ({
		transitionSpec: {
			duration: 0,
			timing: Animated.timing,
			easing: Easing.step0
		}
	})
});

const AppNavigator = createSwitchNavigator({
	AuthLoading: AuthLoadingScreen,
	App: MainModalStack,
	Auth: AuthStack,

}, {
	initialRouteName: 'AuthLoading',
});

export default createAppContainer(AppNavigator);
