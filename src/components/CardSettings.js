import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
	TextInput,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class CardSettings extends Component {
	goToCardHome() {
		Actions.cardHome();
	}
	render() {
		return (
			<View>
				<TextInput placeholder="Número de Tarjeta"/>
				<TextInput placeholder="Nombre"/>
				<TextInput placeholder="CCV"/>
				<TextInput placeholder="Fecha de vencimiento"/>
				<Button
				  onPress={this.goToCardHome}
				  title="Agregar"
				  color="#841584"
				  accessibilityLabel="Agregar"
				/>
			</View>
		)
	}

}
