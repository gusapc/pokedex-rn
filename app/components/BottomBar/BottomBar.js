import React from 'react';
import { 
	View,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';
import styles from './BottomBarStyle';
import IconBottombar from 'pokedex-rn/app/components/IconBottombar';

export default function BottomBar (props) {
	let nav = props.navigation;
	let navState = props.navigation.state;
	let routeName = navState.routes[navState.index].routeName;
	return (
		<SafeAreaView>	
			<View style={[styles.container, styles.row, styles.justifySpaceEvenly]}>
				<TouchableOpacity 
					onPress={() => nav.navigate('DrawerNavigator')}
					activeOpacity={0.5}
					style={[styles.iconLabel, styles.justifyContentCenter]}
				>
					<IconBottombar
						iconName={'home'}
						colorName={routeName !== 'DrawerNavigator' ? 'black':'white'}
						text={'Pokedex'}
					/>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress={() => nav.navigate('FriendsScreen')}
					activeOpacity={0.5}
					style={[styles.iconLabel, styles.justifyContentCenter]}
				>
					<IconBottombar
						iconName={'users'}
						colorName={routeName !== 'FriendsScreen' ? 'black':'white'}
						text={'Amigos'}
					/>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress={() => nav.navigate('ProfileTabNavigator')}
					activeOpacity={0.5}
					style={[styles.iconLabel, styles.justifyContentCenter]}
				>
					<IconBottombar
						iconName={'user'}
						colorName={routeName !== 'ProfileTabNavigator' ? 'black':'white'}
						text={'Perfil'}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}