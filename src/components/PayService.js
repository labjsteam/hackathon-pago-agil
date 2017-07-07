import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class CardSettings extends Component {
	goToPayMercadoPago() {
		Actions.mercadoPago();
	}

	render() {
		return (
			<View>
				<Text>Domicilio: </Text>
				<Text>Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal., Mexico</Text>
				<Text>Número de Servicio: </Text>
				<Text>098766543 32</Text>
				<Text>Periodo: </Text>
				<Text>Jun-Ago</Text>
				<Text>Fecha de Corte: </Text>
				<Text>5-ago-2017</Text>


				<Button
				  onPress={this.goToPayMercadoPago}
				  title="Pagar"
				  color="#841584"
				  accessibilityLabel="Pagar"
				/>
			</View>
		)
	}

}
