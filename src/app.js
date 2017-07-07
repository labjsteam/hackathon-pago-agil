import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import Home from './components/Home';
import Login from './components/Login';
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
      </Scene>
    </Router>
  }
}
