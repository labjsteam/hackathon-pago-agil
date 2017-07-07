import React, { Component } from 'react';
import {
	Button,
	TouchableHighlight,
	StyleSheet,
	Text,
	View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class CardHome extends Component {
	goToCardNew() {
		Actions.cardnew();
	}

	goToDomiciledService() {
		Actions.domiciledService();
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.listcard}>
					<Text>Cuenta</Text>
					<View style={styles.listcard}>
						<Text>BANAMEX</Text>
						<Button
						  style={styles.boton}
						  onPress={this.goToCardNew}
						  title="+"
						  color="#841584"
						  accessibilityLabel="+"
						/>
					</View>
				</View>
				<View style={styles.listcard}>
					<Text>Servicios</Text>
					<View style={styles.listcard}>
						<TouchableHighlight onPress={this.goToDomiciledService}>
							<Text>
							SACMEX
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.goToDomiciledService}>
							<Text>
							CFE
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.goToDomiciledService}>
							<Text>
							Internet
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.goToDomiciledService}>
							<Text>
							Telefonia
							</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.goToDomiciledService}>
							<Text>
							Gas LP
							</Text>
						</TouchableHighlight>

						<Button
						  style={styles.boton}
						  onPress={this.goToCardNew}
						  title="+"
						  color="#841584"
						  accessibilityLabel="+"
						/>
					</View>
				</View>
			</View>
		)
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  listcard: {
	fontSize: 20,
	textAlign: 'left',
	marginLeft: 10,
  },
  card: {
	fontSize: 20,
	textAlign: 'left',
	margin: 25,
  },
  boton: {
	fontSize: 5,
	textAlign: 'left',
	margin: 5,
  },
});
