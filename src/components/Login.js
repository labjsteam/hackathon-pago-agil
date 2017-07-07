import React, { Component } from 'react';

import {
	Button,
	TextInput,
	View
} from 'react-native';

export default class Login extends Component {
	render() {
		return (
			<View>
				<TextInput
					placeholder="Correo electrónico"
					keyboardType="email-address" />
				<TextInput
					placeholder="Contraseña"
					secureTextEntry={true} />
				<Button title="Iniciar Sesión" />
			</View>
		)
	}
}
