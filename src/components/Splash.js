import React, { Component } from 'react';
import {
	StyleSheet,
  Text,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Splash extends Component {
	componentDidMount() {
		setTimeout(() => {
			Actions.home();
		}, 2000);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Pago Ágil</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
