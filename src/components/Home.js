import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
	ToastAndroid,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
	goToLogin() {
		Actions.login();
	}

	goToSignup() {
		Actions.signup();
	}

	render() {
		return (
			<View style={styles.container}>
				<Button
					onPress={this.goToLogin}
				  title="Iniciar Sesión"
				  color="#2196F3"
				  accessibilityLabel="Iniciar Sesión"
				/>
				<Button
					onPress={this.goToSignup}
				  title="Regístrate"
				  color="#841584"
				  accessibilityLabel="Regístrate"
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
