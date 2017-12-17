/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Map from './components/Map.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          id: 1,
          latlng: { latitude: 10.8448376, longitude: 106.7765558 },
          image: require('./assets/traffic_bar_report_police.png'),
          title: 'Kẹt xe',
          description: 'Ngay trước sư phạm kỹ thuật'
        },
        {
          id: 2,
          latlng: { latitude: 10.848736, longitude: 106.770805 },
          image: require('./assets/traffic_bar_report_trafficjam.png'),
          title: 'Kẹt xe',
          description: 'Ngay trước sư phạm kỹ thuật'
        },
        {
          id: 3,
          latlng: { latitude: 10.849084, longitude: 106.771341 },
          image: require('./assets/traffic_bar_report_accident.png'),
          title: 'Kẹt xe',
          description: 'Ngay trước sư phạm kỹ thuật'
        }
      ],
    }
  }
  render() {

    return (
      <Map
        showsUserLocation={true}
        followsUserLocation={true}
        markers={this.state.markers} />
    );
  }
}

