import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
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
				<TextInput
				placeholder="Alias del servicio"
				onChangeText={(text) => this.updateState('aliasService', text) } />
				<TextInput
				placeholder="Número de Servicio"
				onChangeText={(text) => this.updateState('serviceName', text) } />
				<TextInput
				placeholder="Dirección"
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
