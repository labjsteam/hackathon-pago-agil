import React, { Component } from 'react';

import {
	StyleSheet,
	View
} from 'react-native';

import CardSettings from './CardSettings';
import CardHome from './CardHome';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'new-user',
			cards: []
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

	showView = () => {
		const status = this.state.status;
		const cards = this.state.cards;

		if (status === 'new-user') {
			return <CardSettings updateStatus={this.updateStatus} addCard={this.addCard} />
		} else if (status === 'card-added') {
			return <CardHome cards={cards} />
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
