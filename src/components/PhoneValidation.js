import React, { Component } from 'react';

import {
	Button,
	Text,
	TextInput,
	ToastAndroid,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class PhoneValidation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userCode: ''
		};
	}
 alerta(){
	 ToastAndroid.showWithGravity('Codigo Incorrecto', ToastAndroid.SHORT, ToastAndroid.CENTER);
 }
	updateState = (text) => {
		this.setState({
			userCode: text
		});
	}

	goToCuentausuario = () => {
		const updateStep = this.props.updateStep;
		const code = this.props.validationCode; // número generado
		const userCode = this.state.userCode;
		if(userCode === code){
			updateStep({
				step: 3
			});
		}else{
			this.alerta();
		}
	}

	render() {
		return (
			<View>
				<TextInput
					placeholder="Ingresa el código"
					keyboardType="numeric"
					onChangeText={this.updateState}
				/>
				<Button
					onPress={this.goToCuentausuario}
					title="Validar"
				/>
			</View>
		)
	}
}
