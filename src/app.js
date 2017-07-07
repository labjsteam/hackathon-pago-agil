import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import CardHome from './components/CardHome';
import CardSettings from './components/CardSettings';
import DomiciledService from './components/DomiciledService';
import Home from './components/Home';
import Login from './components/Login';
import PayService from './components/PayService';
import ServiceNew from './components/ServiceNew';
import Signup from './components/Signup';
import Splash from './components/Splash';


export default class PagoAgil extends Component {
  render() {
		return <Router>
      <Scene key="root">
				<Scene key="splash" component={Splash} hideNavBar={true} />
        <Scene key="home" component={Home} hideNavBar={true}/>
        <Scene key="login" component={Login} hideNavBar={true}/>
        <Scene key="signup" component={Signup} hideNavBar={true}/>
		<Scene key="cardnew" component={CardSettings} hideNavBar={true}/>
		<Scene key="cardHome" component={CardHome} hideNavBar={true}/>
		<Scene key="domiciledService" component={DomiciledService} hideNavBar={true}/>
		<Scene key="serviceNew" component={ServiceNew} hideNavBar={true}/>
		<Scene key="pay" component={PayService} hideNavBar={true}/>
      </Scene>
    </Router>
  }
}
