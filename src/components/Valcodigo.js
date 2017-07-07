import React, { Component } from 'react';

import {
	Button,
	Text,
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
					placeholder="Ingresa el código"
					keyboardType="numeric" />
				<Button 	
					onPress={this.goToCuentausuario}
					title="Validar"
					// {text: 'OK', onPress: () => console.log('OK Pressed')};
				/>
			</View>
		)
	}
}