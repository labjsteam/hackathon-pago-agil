import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
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

	addCard = () => {
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
			<View>
				<TextInput
					placeholder="Número de Tarjeta"
					onChangeText={(text) => this.updateState('cardNumber', text) } />
				<TextInput
					placeholder="Nombre"
					onChangeText={(text) => this.updateState('userName', text) } />
				<TextInput
					placeholder="CCV"
					onChangeText={(text) => this.updateState('ccv', text) }  />
				<TextInput
					placeholder="Fecha de vencimiento"
					onChangeText={(text) => this.updateState('expirationDate', text) } />
				<Button
				  onPress={this.addCard}
				  title="Agregar"
				  color="#841584"
				  accessibilityLabel="Agregar"
				/>
			</View>
		)
	}

}
