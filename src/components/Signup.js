import React, { Component } from 'react';

import {
	Button,
	TextInput,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import superagent from 'superagent';

import RegisterPhone from './RegisterPhone';
import PhoneValidation from './PhoneValidation';
import Cuentausuario from './Cuentausuario';

export default class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			validationCode: ''
		};
	}

	updateStep = (step) => {
		this.setState(step);
	}

	showStep = () => {
		const step = this.state.step;
		if (step === 1) {
			return <RegisterPhone updateStep={this.updateStep} />
		} else if (step === 2) {
			return <PhoneValidation updateStep={this.updateStep} validationCode={this.state.validationCode} />
		} else if (step === 3) {
			return <Cuentausuario />
		}
	}

	render() {
		return (
			<View>
				{this.showStep()}
				<TextInput
					placeholder="Ingresa tu número"
					keyboardType="numeric"
					maxLength={10} />
				<Button 
					onPress={this.goToValcodigo}
					title="Enviar" 
				/>

			</View>
		)
	}
}
