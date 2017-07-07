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
	goToCardHome() {
		Actions.cardHome();
	}
	goToPayService() {
		Actions.pay();
	}
	render() {
		return (
			<View>
				<Text>Domicilia tu Servicio:</Text>
				<TextInput placeholder="Dirección"/>
				<TextInput placeholder="Número de Servicio"/>
				<TextInput placeholder="Periodo"/>
				<TextInput placeholder="Fecha de corte"/>
				<Button
				  onPress={this.goToCardHome}
				  title="Guardar"
				  color="#841584"
				  accessibilityLabel="Guardar"
				/>
				<Button
				  onPress={this.goToPayService}
				  title="Pagar"
				  color="#841584"
				  accessibilityLabel="Pagar"
				/>
				<Button
				  onPress={this.goToPayService}
				  title="Pago Recurrente"
				  color="#841584"
				  accessibilityLabel="Pago Recurrente"
				/>
			</View>
		)
	}

}
