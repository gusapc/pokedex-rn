import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import { Colors } from 'pokedex-rn/app/styles';
import styles from './FriendScanScreenStyle';
import BodyText from 'pokedex-rn/app/components/BodyText';
import HeaderNav from 'pokedex-rn/app/components/HeaderNav';
import SetFriendContainer from 'pokedex-rn/app/containers/SetFriendContainer';
import { Feather } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions'
export default class FriendScanScreen extends Component {	

	state = {
		deniedPermission: false,
		requestingPermission: true,
		scanned: false
	}

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({
			deniedPermission: status != 'granted',
			requestingPermission: false
		 });
	}
	
	render() {
		const { requestingPermission, scanned, deniedPermission } = this.state;

		return (
			<View style={[styles.container, styles.mainContainer]}>
				<View style={styles.above}>
					<HeaderNav
						left={
							<TouchableOpacity
								onPress={()=> this.props.navigation.goBack()}
								activeOpacity={0.6}
							>
								<Feather  name='x' size={25} color={Colors.white}/>
							</TouchableOpacity>
						}
						statusBar='light-content'
					/>
				</View>
				<View style={[styles.justifyContentCenter, styles.squareContainer]}>
					<View style={[styles.column, styles.justifyContentCenter ]}>
						<View style={[styles.row]}>
							<View style={[styles.leftTop, styles.size]}/>
							<View style={[styles.rightTop, styles.size]}/>
						</View>
						<View style={[styles.row]}>
							<View style={[styles.leftBottom, styles.size]}/>
							<View style={[styles.rightBottom, styles.size]}/>
						</View>
					</View>
				</View>

				{ (requestingPermission && !deniedPermission) && 
					<View style={[styles.above, styles.baseHorizontalMargin]}>
						<BodyText
							text='Requesting for camera permission'
							color='white'
						/>
					</View>
				}

				{ deniedPermission &&
					<View style={[styles.above, styles.baseHorizontalMargin]}>
						<BodyText
							text='No access to camera'
							color='white'
						/>
					</View>
				}
				<View style={[styles.cameraContainer]}>
					<SetFriendContainer>
					{(setFriend) => {
						handleBarCodeScanned = ({ type, data }) => {
							if(type == 256 || type === 'org.iso.QRCode'){
								this.setState({ scanned: true });
								setFriend('PokeTeams', data);
								this.props.navigation.navigate('Main');
							}
						};
						return (<BarCodeScanner
							onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
							style={[styles.flex1]}
						/>
					)}}
					</SetFriendContainer>
				</View>
			</View>
		);
	}
}
