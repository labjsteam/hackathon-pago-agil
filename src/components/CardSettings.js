import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
	ScrollView,
	Text,
	TextInput,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class CardSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			card: {}
		}
	}

	addUserCard = () => {
		const updateStatus = this.props.updateStatus;
		const addCard = this.props.addCard;

		const card = this.state.card;
		addCard(card);
		updateStatus('card-added');
	}

	updateState = (prop, text) => {
		let card = this.state.card;
		card[prop] = text;
		this.setState({
			card
		});
	}

	render() {
		const card = this.state.card;
		return (
			<ScrollView>
				<Text>Alias de la Cuenta</Text>
				<TextInput
					placeholder="Ej. Banco"
					onChangeText={(text) => this.updateState('AliasCard', text) } />
				<Text>Número de Tarjeta</Text>
				<TextInput
					placeholder="0000 0000 0000 0000"
					keyboardType="numeric"
					maxLength={19}
					onChangeText={(text) => this.updateState('cardNumber', text) } />
				<Text>Nombre del Titular</Text>
				<TextInput
					placeholder="Nombre Apellidos"
					onChangeText={(text) => this.updateState('userName', text) } />
				<Text>Código de verificación de la tarjeta</Text>
				<TextInput
					placeholder="XXX"
					keyboardType="numeric"
					maxLength={3}
					onChangeText={(text) => this.updateState('ccv', text) }  />
				<Text>Fecha de vencimiento</Text>
				<TextInput
					placeholder="MM-AA"
					onChangeText={(text) => this.updateState('expirationDate', text) } />
				<Button
				  onPress={this.addUserCard}
				  title="Agregar"
				  color="#841584"
				  accessibilityLabel="Agregar"

				/>
			</ScrollView>
		)
	}

}
