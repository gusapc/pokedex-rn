import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback
} from 'react-native';

import styles from './LoginScreenStyle';
import PrimaryBtn from 'pokedex-rn/app/components/PrimaryBtn';
import HugeText from 'pokedex-rn/app/components/HugeText';
import Divider from 'pokedex-rn/app/components/Divider';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import SetAuthInfoContainer from 'pokedex-rn/app/containers/SetAuthInfoContainer';
import { Colors } from 'pokedex-rn/app/styles';
import Faker from 'faker';

export default class LoginScreen extends Component {	

	static navigationOptions = {
		header: null
	}

	state = {
		username: '',
		password: '',
		hasMinimumData: false,
	}
	
	onChange = (value, type) => {
		this.setState({
			[type]: value
		}, () => {
			this.setState({
				hasMinimumData: this.state.username.length > 4  && this.state.password.length > 4
			})
		})
	}
	
	login = (setAuthInfo) => {
		if(!this.state.hasMinimumData) alert('La contraseña y el usuario debe tener mas de 4 caracteres');
		else {
			setAuthInfo({
				username: this.state.username,
				password: this.state.password,
				loggedIn: true,
				avatar: Faker.image.people(),
				firstName: Faker.name.firstName(),
				lastName: Faker.name.lastName()
			});
			this.props.navigation.navigate('AuthLoading');
		}
	}


	render () {
		return (
			<TouchableWithoutFeedback 
				onPress={()=> Keyboard.dismiss()}
			>
				<View style={styles.container}>
					<View style={[styles.container, styles.justifySpaceEvenly]}>
						<Image
							style={styles.imageFill}    
							source={require('pokedex-rn/assets/splash.png')}
						/>
						<View style={[styles.marginHorizontal, styles.marginVertical, styles.alignSelfCenter]}>
							<HugeText 
								text='POKEDEX'
								color='white'
							/>
						</View>
						<View style={styles.extraSpace}/>
						<View style={[styles.marginHorizontal, styles.baseMarginTop]}>
							<View style={[styles.marginVertical]}>
								<TextInput
									ref={(input) => { this.mainTextInput = input; }}
									style={styles.textInputStyle}
									underlineColorAndroid={'rgba(0, 0, 0, 0)'}
									placeholderTextColor={Colors.darkest}
									placeholder={'Email'}
									maxLength={100}
									returnKeyType='next'
									onChangeText={(value) => this.onChange(value, 'username')}
									blurOnSubmit={ false }
									textContentType='emailAddress'
									keyboardType='email-address'
									onSubmitEditing={() => { 
										this.secondTextInput.focus();
									}}
								/>
								<Divider/>
								<SetAuthInfoContainer>
								{(setAuthInfo) =>(
									<TextInput
										ref={(input) => { this.secondTextInput = input; }}
										style={styles.textInputStyle}
										underlineColorAndroid={'rgba(0, 0, 0, 0)'}
										placeholderTextColor={Colors.darkest}
										placeholder='*******'
										maxLength={100}
										returnKeyType='go'
										secureTextEntry
										onChangeText={(value) => this.onChange(value, 'password')}
										blurOnSubmit={ false }
										onSubmitEditing={ () =>  this.login(setAuthInfo)}
									/>
								)}
								</SetAuthInfoContainer>
								<Divider/>
							</View>
							<SetAuthInfoContainer>
							{(setAuthInfo) =>(
								<PrimaryBtn 
									text='Iniciar sesión'
									color='white'
									backgroundColor='red'
									onPress={() =>  this.login(setAuthInfo)}
								/>
							)}
							</SetAuthInfoContainer>
						</View>
					</View>
					<KeyboardSpacer/>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}