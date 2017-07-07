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
					keyboardType="numeric"
					maxLength={4} />
				<Button 	
					onPress={this.goToCuentausuario}
					title="Validar"
				/>
			</View>
		)
	}
}