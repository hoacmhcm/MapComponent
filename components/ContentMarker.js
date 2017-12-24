import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'

const window = Dimensions.get('window');

export default class ContentMarker extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.info}>
                        <Text style={styles.title} > {this.props.curMarker.title}</Text>
                        <Text style={styles.distance} > Cách 0 km</Text>
                        <Text style={styles.description} > {this.props.curMarker.description}</Text>
                        <Text style={styles.place} > Thủ Đức Thành phố Hồ Chí Minh</Text>
                    </View >
                    <View style={styles.image}>
                        <Image source={this.props.curMarker.image} />
                    </View >
                </View >
                <View style={styles.bottom}>
                    <Text style={styles.sign}>1 phút trước bởi Chau Minh Hoa</Text>
                    <View style={styles.button}>
                        <TouchableOpacity>
                            <Image source={require('../assets/comment.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/close.png')} />
                        </TouchableOpacity>
                    </View >
                </View >
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: window.width,
        height: window.height / 3,
        backgroundColor: '#3e4d66',
    },
    top: {
        flex: 5,
        flexDirection: 'row',

    },
    info: {
        flex: 3,
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1.5
    },
    
    title: {
        marginTop: window.height / 70,
        alignSelf: 'center',
        color: 'silver',
        fontSize: window.height / 15
    },
    distance:{
        color: 'white',
        marginTop: window.height / 100,
        fontSize: window.height / 20,
        marginLeft: 5,
    },
    description: {
        color: 'white',
        marginTop: window.height / 80,
        fontSize: window.height / 40,
        marginLeft: 10,
    },
    place: {
        color: 'white',
        marginTop: window.height / 80,
        fontSize: window.height / 50,
        marginLeft: 10,
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center'
    },
    sign: {
        flex: 3,
        marginLeft: 10
    },
    button: {
        backgroundColor: '#3e4d66',
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})