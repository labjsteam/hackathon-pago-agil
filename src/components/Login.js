import React, { Component } from 'react';

import {
	Button,
	TextInput,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
	goToCardNew() {
		Actions.main();
	}

	render() {
		return (
			<View>
				<TextInput
					placeholder="Correo electrónico"
					keyboardType="email-address" />
				<TextInput
					placeholder="Contraseña"
					secureTextEntry={true} />
				<Button
				onPress={this.goToCardNew}
				title="Iniciar Sesión"
				/>
			</View>
		)
	}
}
