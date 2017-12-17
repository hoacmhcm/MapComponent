import React, { Component } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types';

import ContentMarker from './ContentMarker'

const window = Dimensions.get('window');

export default class Map extends Component {
    static defaultProps = {
        showsUserLocation: true,
        followsUserLocation: true,
    }

    static propTypes = {
        showsUserLocation: PropTypes.bool.isRequired,
        followsUserLocation: PropTypes.bool.isRequired,
        markers: PropTypes.array,
    }

    constructor(props) {
        super(props);
        this.state = {
            mapRegion: null,
            status: false,
            curMarker: {
                id: null,
                latlng: { latitude: 10.8448376, longitude: 106.7765558 },
                image: null,
                title: null,
                description: null
            }
        }
    }





    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            // Create the object to update this.state.mapRegion through the onRegionChange function
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            }
            this.setState({ mapRegion: region });
        });

    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onRegionChange = () => { }

    toogle(marker) {
        this.setState({
            status: !this.state.status,
            curMarker: marker
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={styles.map}
                    showsUserLocation={this.props.showsUserLocation}
                    followsUserLocation={this.props.followsUserLocation}
                    onPress={this.onMapPress}
                    region={this.state.mapRegion} >

                    {this.props.markers.map((marker) => (
                        <MapView.Marker
                            key={marker.id}
                            coordinate={marker.latlng}
                            image={marker.image}
                            onPress={() => { this.toogle(marker) }}>
                            {/* <MapView.Callout>
                                <View style={{ flex: 1, width: 300, height: 300 }}>
                                    <Text style={{ backgroundColor: 'red' }}>aaaaaaaaaaa</Text>
                                    <TouchableOpacity style={{ backgroundColor: 'green' }} onPress={() => alert('he')}><Text>22222222</Text></TouchableOpacity>
                                </View>
                            </MapView.Callout> */}
                        </MapView.Marker>))}
                </MapView>
                {this.state.status ? <ContentMarker curMarker={this.state.curMarker} /> : null}

            </View >
        )
    }
}


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },

});
