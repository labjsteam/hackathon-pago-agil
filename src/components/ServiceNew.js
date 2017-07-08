import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class ServiceNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: {}
		}
	}

	addUserService = () => {
		const updateStatus = this.props.updateStatus;
		const addService = this.props.addService;

		const service = this.state.service;
		addService(service);
		updateStatus('card-added');
	}

	updateState = (prop, text) => {
		let service = this.state.service;
		service[prop] = text;
		this.setState({
			service
		});
	}
	goToCardHome() {
		Actions.cardHome();
	}
	render() {
		return (
			<View>
				<Text>Alias del servicio</Text>
				<TextInput
				placeholder="Ej. Servicio"
				maxLength={19}
				onChangeText={(text) => this.updateState('aliasService', text) } />
				<Text>Número de servicio</Text>
				<TextInput
				placeholder="0000000000000"
				keyboardType="numeric"
				maxLength={12}
				onChangeText={(text) => this.updateState('serviceName', text) } />
				<Text>Dirección</Text>
				<TextInput
				placeholder="Ej. Av. Juarez N°23, col. Valles."
				maxLength={80}
				onChangeText={(text)=> this.updateStatus('direction',text) } />
				<Button
				  onPress={this.addUserService}
				  title="Agregar"
				  color="#841584"
				  accessibilityLabel="Agregar"
				/>
			</View>
		)
	}

}
