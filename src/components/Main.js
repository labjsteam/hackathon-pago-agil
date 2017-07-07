import React, { Component } from 'react';

import {
	StyleSheet,
	View
} from 'react-native';

import CardSettings from './CardSettings';
import CardHome from './CardHome';
import ServiceNew from './ServiceNew';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'add-card',
			cards: [],
			services: [],
		};
	}


	updateStatus = (newStatus) => {
		this.setState({
			status: newStatus
		});
	}

	addCard = (card) => {
		const cards = this.state.cards;
		cards.push(card);
		this.setState({
			cards: cards
		});
	}
	addServices = (service) => {
		const services = this.state.services;
		services.push(service);
		this.setState({
			services: services
		});
	}

	showView = () => {
		const status = this.state.status;
		const cards = this.state.cards;
		const services = this.state.services;

		if (status === 'add-card') {
			return <CardSettings updateStatus={this.updateStatus} addCard={this.addCard} />
		} else if (status === 'card-added') {
			return <CardHome services ={services} cards={cards} updateStatus={this.updateStatus} addCard={this.addCard} />
		} else if (status === 'add-service') {
			return <ServiceNew updateStatus={this.updateStatus} addService={this.addServices} />
		}

	}

	render() {
		const showView = this.showView;
		return (
			<View style={styles.container}>
				{showView()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
