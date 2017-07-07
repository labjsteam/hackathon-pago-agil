import React, { Component } from 'react';

import {
	Button,
	TextInput,
	View
} from 'react-native';

import superagent from 'superagent';

export default class RegisterPhone extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: ''
		};
	}

	updateNumber = (number) => {
		this.setState({
			number
		});
	}

	generateRandomCode() {
		let serie = [];
		let numero;

		for(let i=0; i< 4; i++){
				numero = Math.floor((Math.random() * 9) + 1);
				serie.push(numero);
		}

		const cadena = serie.join('');
		return cadena;
	}

	sendSMS(number, code) {
		superagent.post('https://pago-agil-api.herokuapp.com/api/v1/message')
			.send({
				number,
				verificationCode: code
			})
			.end((err, res) => {
				console.log('err', err);
				console.log('res', res);
			});
	}

	updateStatus = () => {
		const updateStep = this.props.updateStep;
		const code = this.generateRandomCode();
		const number = `+52${this.state.number}`;

		this.sendSMS(number, code);
		updateStep({
			step: 2,
			validationCode: code
		});
	}

	render() {
		return (
			<View>
				<TextInput
					placeholder="Ingresa tu número"
					keyboardType="numeric"
					onChangeText={this.updateNumber} />
				<Button
					onPress={this.updateStatus}
					title="Enviar"
				/>
			</View>
		)
	}
}
