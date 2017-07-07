import React, { Component } from 'react';

import {
	Button,
	TextInput,
	View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Valcodigo extends Component {
	goToCuentausuario() {
		Actions.configusuario();
	}
	render() {
		return (
			<View>
				<TextInput
					placeholder="Nombre"
					keyboardType="default" />
				<TextInput
					placeholder="Apellido paterno"
					keyboardType="default"
				/>
				<TextInput
					placeholder="Apellido materno"
					keyboardType="default"
				/>
				<TextInput
					placeholder="Correo electrónico"
					keyboardType="email-address" />
				<TextInput
					placeholder="Contraseña"
					secureTextEntry={true} 
				/>
				<Button title="Guardar datos" />
			</View>
		)
	}
}