import React, { Component } from 'react';

import {
	Button,
	TextInput,
	ToastAndroid, //crea la alerta
	View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Valcodigo extends Component {
	goToCuentausuario() {
		Actions.configusuario();
	}
	mensaje(){
		ToastAndroid.showWithGravity('Te has registrado exitosamente', ToastAndroid.SHORT, ToastAndroid.CENTER);
		Actions.login();
	}
	render() {
		return (
			<View>
				<TextInput
					placeholder="Nombre"
					keyboardType="default"
					maxLength={20} 
				/>
				<TextInput
					placeholder="Apellido paterno"
					keyboardType="default"
					maxLength={20}
				/>
				<TextInput
					placeholder="Apellido materno"
					keyboardType="default"
					maxLength={20}
				/>
				<TextInput
					placeholder="Correo electrónico"
					keyboardType="email-address" />
				<TextInput
					placeholder="Contraseña (máximo 12 caracteres)"
					secureTextEntry={true}
					maxLength={12}
				/>
				<Button 
					title="Guardar datos"
					onPress = {this.mensaje}
				/>
			</View>
		)
	}
}