import React, { Component } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types';
import Polyline from '@mapbox/polyline';

import ContentMarker from './ContentMarker'

const window = Dimensions.get('window');
let key = 0;
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

    // static navigationOptions = {
    //     drawerLabel: 'Home Screen',
    // }

    map = null;


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
            },
            lastLat: null,
            lastLong: null,
            currentRegion: null,
            polylines: [],
            endpoint: null,
            markers: [
                {
                    id: 1,
                    latlng: { latitude: 10.8448376, longitude: 106.7765558 },
                    image: require('../assets/traffic_bar_report_police.png'),
                    title: 'Kẹt xe',
                    description: 'Ngay trước sư phạm kỹ thuật'
                },
                {
                    id: 2,
                    latlng: { latitude: 10.848736, longitude: 106.770805 },
                    image: require('../assets/traffic_bar_report_trafficjam.png'),
                    title: 'Kẹt xe',
                    description: 'Cẩn thận có kẹt xe'
                },
                {
                    id: 3,
                    latlng: { latitude: 10.849084, longitude: 106.771341 },
                    image: require('../assets/traffic_bar_report_accident.png'),
                    title: 'Kẹt xe',
                    description: 'Ngay trước sư phạm kỹ thuật'
                }
            ],
            textDirection: 'Quận 9',
            ready: true,
        }
    }

    async getDirections(startLoc, destinationLoc) {
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&alternatives=true`);
            let respJson = await resp.json();
            // const count = Object.keys(respJson).length;
            // console.log(respJson);
            var coordstemp = [];


            var points = (respJson.routes.map((value) => (
                (value.overview_polyline.points)
            )));
            var pointsdecode = points.map((value) => Polyline.decode(value));
            // console.log(pointsdecode);
            const count = Object.keys(pointsdecode).length;
            for (let i = 0; i < count; i++) {
                let coordinates = pointsdecode[i].map((point) => {
                    return {
                        latitude: point[0],
                        longitude: point[1]
                    }
                });

                if (i == 0) {
                    console.log(coordinates);

                    let key = Object.keys(coordinates);
                    let lastpoint = coordinates[key.length - 1];
                    let lastPointMarker = (
                        <MapView.Marker
                            coordinate={lastpoint} />);
                    this.setState({ endpoint: lastPointMarker });
                    console.log(this.state.endpoint);

                    this.setState({ key: key++ });
                    let polyLine = (
                        <MapView.Polyline
                            key={this.state.key}
                            coordinates={coordinates}
                            strokeWidth={5}
                            strokeColor="#00B3FD" />
                    );


                    // console.log(coordinates);
                    coordstemp.push(polyLine);
                }
                else {
                    this.setState({ key: key++ });
                    let polyLine = (
                        <MapView.Polyline
                            key={this.state.key}
                            coordinates={coordinates}
                            strokeWidth={5}
                            strokeColor="#AFAFAF" />
                    );
                    // console.log(coordinates);
                    coordstemp.push(polyLine);
                }
            }
            this.setState({ polylines: coordstemp.reverse() })

            // console.log(this.state.polylines);
        } catch (error) {
            alert(error)
            return error
        }
    }

    getMyposition() {
        try {
            // console.log(this.state.mapRegion);
            console.log(this.map);
            // this.refs.mapview.animteToRegion(this.state.mapRegion,1500);
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                this.setState({
                    mapRegion: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.00922 * 1.5,
                        longitudeDelta: 0.00421 * 1.5,
                    }
                });
                setTimeout(() => this.map.animateToRegion((this.state.mapRegion)), 10);
                
            },
                (error) => alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        } catch (error) {
            alert(error)
            return error
        }

    }

    getDirect = () => {
        try {
            // if (this.props.textDirection !== null) {
            if (this.state.textDirection !== null) {
                // console.log('GET!!!!');
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log(position);
                    this.setState({
                        currentRegion: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: 0.00922 * 1.5,
                            longitudeDelta: 0.00421 * 1.5,
                        }
                    });
                    console.log(this.state.currentRegion);
                    this.getDirections(this.state.currentRegion.latitude + ',' + this.state.currentRegion.longitude, this.props.textDirection);

                },
                    (error) => alert(error.message),
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                );
            }
        } catch (error) {
            alert(error)
            return error
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
        // console.log(this.state.mapRegion)


        // navigator.geolocation.getCurrentPosition((position) => {
        //     console.log(position);
        //     this.setState({
        //         currentRegion: {
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude,
        //             latitudeDelta: 0.00922 * 1.5,
        //             longitudeDelta: 0.00421 * 1.5,
        //         }
        //     });
        // },
        //     (error) => alert(error.message),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        // );

        // this.getDirect();

    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onRegionChange = (region, lastLat, lastLong) => {
        this.setState({
            mapRegion: region,
            // If there are no new values set use the the current ones
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
        });
    }

    toogle(marker) {
        // if (this.state.status !== true) {

        // }

        this.setState({
            status: true,
            curMarker: marker
        })
        // if()

        // let region = {
        //     latitude: marker.latlng.latitude,
        //     longitude:marker.latlng.longitude,
        //     latitudeDelta: 0.00922 * 1.5,
        //     longitudeDelta: 0.00421 * 1.5
        //   }
        // this.onRegionChange(region)
    }

    onMapPress = () => {
        this.setState({
            status: false,
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={styles.map}
                    ref={map => { this.map = map }}
                    // showsUserLocation={this.props.showsUserLocation}
                    // followsUserLocation={this.props.followsUserLocation}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={false}
                    initialRegion={this.state.mapRegion}
                    onRegionChange={this.onRegionChange}
                    onPress={this.onMapPress} >

                    {/* {this.props.markers.map((marker) => ( */}
                    {this.state.markers.map((marker) => (
                        <MapView.Marker
                            key={marker.id}
                            coordinate={marker.latlng}
                            image={marker.image}
                            onPress={() => { this.toogle(marker) }}>
                        </MapView.Marker>))}


                    {this.state.polylines}

                    {this.state.endpoint}
                </MapView>
                {this.state.status ? <ContentMarker curMarker={this.state.curMarker} /> : null}

                <TouchableOpacity style={{ position: 'absolute', bottom: 30, paddingRight: 20, alignSelf: 'flex-end' }
                } onPress={() => navigate('Report')}>
                    <Image style={{ width: window.width / 6, height: window.height / 6, resizeMode: 'contain' }} source={require('../assets/report_button.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={{ position: 'absolute', bottom: 0, paddingLeft: 10 }
                } onPress={() => { this.getMyposition() }}>
                    <Image style={{ width: window.width / 4, height: window.height / 4, resizeMode: 'contain' }} source={require('../assets/center_button_map.png')} />
                </TouchableOpacity>

            </View >
        )
    }
}


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },

});
