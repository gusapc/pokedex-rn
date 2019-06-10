import React, { Component } from 'react';
import { 
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import SegmentedControlTab from 'pokedex-rn/app/components/SegmentedControlTab';
import styles from './ProfileTabStyle';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import TitleText from 'pokedex-rn/app/components/TitleText';
import { Feather } from '@expo/vector-icons';
import LabelText from 'pokedex-rn/app/components/LabelText';
import TinyText from 'pokedex-rn/app/components/TinyText';
import CircleImg from 'pokedex-rn/app/components/CircleImg';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthData } from "pokedex-rn/app/reducers";
import { setAuthInfo } from "pokedex-rn/app/actions/AuthActions";
export default function ProfileTab (props) {

	const authData = useSelector(getAuthData);
	const dispatch = useDispatch();

	let routeName = props.navigation.state.routes[props.navigation.state.index].routeName;
	return (
		<View style={[styles.mainContainer]}>
			<HeaderNav
				statusBar='dark-content'
				left={
					<View style={styles.marginHorizontal}>
						<TitleText text={'Perfil'} color='darkest' weight='medium'/>
					</View>
				}
				right={
					<View style={styles.marginHorizontal}>
						<TouchableOpacity 
							onPress={() => {
								 dispatch(setAuthInfo({
									username: '',
									password: '',
									loggedIn: false,
									avatar: '',
									firstName: '',
									lastName: ''
								}));
								props.navigation.navigate('AuthLoading');
						}}>
							<Feather 
								name={'log-out'} 
								size={24} 
								color={'black'}
							/>
						</TouchableOpacity>
					</View>
				}
			/>
			<View style={[styles.avatar]}>
				<CircleImg
					image={authData.avatar}
					size='Big'
				/>
			</View>
			<LabelText text={`${authData.firstName} ${authData.lastName}`} color='darkest' weight='medium' align='center'/>
			<TinyText text={`@${authData.username}`} color='darkest' weight='light' align='center'/>
			<View style={styles.whiteBg}>
				<View style={[styles.whiteBg, styles.smallMarginTop]}>
					<SegmentedControlTab 
						rightText={'QR Code'}
						rightName={'QrCodeScreen'}
						rightAction={() => props.navigation.navigate('QrCodeScreen')}
						leftText={'Team'}
						leftName={'MyPokemonScreen'}
						leftAction={() => props.navigation.navigate('MyPokemonScreen')}
						current={routeName}
					/>
				</View>
			</View>
		</View>
	);
}
