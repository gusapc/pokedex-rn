import React from 'react';
import { View } from 'react-native';
import styles from './RegionMenuStyle';
import ColumnsIconArrow from 'pokedex-rn/app/components/ColumnsIconArrow';
import LabelText from 'pokedex-rn/app/components/LabelText';
import TinyText from 'pokedex-rn/app/components/TinyText';
import CircleImg from 'pokedex-rn/app/components/CircleImg';
import { useSelector } from 'react-redux';
import { getAuthData } from "pokedex-rn/app/reducers";

export default function RegionMenu (props){
	
	const authData = useSelector(getAuthData);
	const nav = props.navigation;
	const navState = props.navigation.state;
	const routeName = navState.routes[navState.index].routeName;
	
	return (
		<View style={[styles.container, styles.justifySpaceEvenly, styles.background]}>
			<View style={[styles.mainContainer, styles.doubleMarginVertical]}>
				<View style={[styles.avatar]}>
					<CircleImg
						image={authData.avatar}
						size='Big'
					/>
				</View>
				<LabelText text={`${authData.firstName} ${authData.lastName}`} color='black' weight='medium' align='center'/>
				<TinyText text={`@${authData.username}`} color='black' weight='light' align='center'/>
			</View>
			<ColumnsIconArrow
				isIconLeft={false}
				iconRight={'map'}
				title={'Nacional'}
				color={routeName === 'HomeScreen' ?  'white':'black'}
				colorText={routeName === 'HomeScreen' ?  'white':'black'}
				onPress={() => props.navigation.navigate('HomeScreen') }
			/>
			<ColumnsIconArrow
				isIconLeft={false}
				iconRight={'navigation'}
				title={'Kanto'}
				color={routeName === 'KantoScreen' ?  'white':'black'}
				colorText={routeName === 'KantoScreen' ?  'white':'black'}
				onPress={() => props.navigation.navigate('KantoScreen') }
			/>
			<ColumnsIconArrow
				isIconLeft={false}
				iconRight={'refresh-cw'}
				title={'Johto'}
				color={routeName === 'JohtoScreen' ?  'white':'black'}
				colorText={routeName === 'JohtoScreen' ?  'white':'black'}
				onPress={() => props.navigation.navigate('JohtoScreen') }
			/>
			<ColumnsIconArrow
				isIconLeft={false}
				iconRight={'github'}
				title={'Hoenn'}
				color={routeName === 'HoennScreen' ?  'white':'black'}
				colorText={routeName === 'HoennScreen' ?  'white':'black'}
				onPress={() => props.navigation.navigate('HoennScreen') }
			/>
			<ColumnsIconArrow
				isIconLeft={false}
				iconRight={'crosshair'}
				title={'Sinnoh'}
				color={routeName === 'SinnohScreen' ?  'white':'black'}
				colorText={routeName === 'SinnohScreen' ?  'white':'black'}
				onPress={() => props.navigation.navigate('SinnohScreen') }
			/>
			<ColumnsIconArrow
				isIconLeft={false}
				iconRight={'thumbs-down'}
				title={'Unova'}
				color={routeName === 'UnovaScreen' ?  'white':'black'}
				colorText={routeName === 'UnovaScreen' ?  'white':'black'}
				onPress={() => props.navigation.navigate('UnovaScreen') }
			/>
			<ColumnsIconArrow
				isIconLeft={false}
				iconRight={'rss'}
				title={'Kalos'}
				color={routeName === 'KalosScreen' ?  'white':'black'}
				colorText={routeName === 'KalosScreen' ?  'white':'black'}
				onPress={() => props.navigation.navigate('KalosScreen') }
			/>

			<ColumnsIconArrow
				isIconLeft={false}
				iconRight={'git-branch'}
				title={'Alola'}
				color={routeName === 'AlolaScreen' ?  'white':'black'}
				colorText={routeName === 'AlolaScreen' ?  'white':'black'}
				onPress={() => props.navigation.navigate('AlolaScreen') }
			/>

			<View style={styles.extraSpace} />
		</View>
	);
}
