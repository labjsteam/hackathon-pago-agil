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
	constructor(props) {
		super(props);
	}

	goToCardNew = () => {
		const updateStatus = this.props.updateStatus;
		updateStatus('add-card');
	}

	goToServiceNew = () => {
		const updateStatus = this.props.updateStatus;
		updateStatus('add-service');
	}


	goToDomiciledService() {
		Actions.domiciledService();
	}
	render() {
		const cards = this.props.cards;
		const services = this.props.services;
		console.log(services)
		console.log(cards);
		return (
			<View>
				<View style={styles.listcard}>
					<Text>Cuenta</Text>
					{cards.map((card, i) => {
						return (
							<View style={styles.listcard} key={i}>
								<Text>{card.AliasCard}</Text>
							</View>
						);
					})}
					<Button
						style={styles.boton}
						onPress={this.goToCardNew}
						title="+"
						color="#841584"
						accessibilityLabel="+"
					/>
				</View>
				<View style={styles.listcard}>
					<Text>Servicios</Text>
					{services.map((service,i) => {
							return(
								<View style={styles.listcard} key={i}>
									<Text>{service.aliasService}</Text>
								</View>
							);
						})}
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
					</View>
					<Button
					  style={styles.boton}
					  onPress={this.goToServiceNew}
					  title="+"
					  color="#841584"
					  accessibilityLabel="+"
					/>
				</View>
			</View>
		)
	}

}

const styles = StyleSheet.create({
  listcard: {
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
