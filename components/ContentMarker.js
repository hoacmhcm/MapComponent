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
                        <TouchableOpacity style={styles.opacitycomment}
                            onPress={this.props.navigateComment}>
                            <Image style={styles.imagecomment} source={require('../assets/take_over_comment_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.opacitylike}>
                            <Image style={styles.imagelike} source={require('../assets/take_over_like_icon.png')} />
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
        backgroundColor: '#263238',
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
        marginTop: window.height / 100,
        color: '#9E9E9E',
        fontSize: window.height / 15
    },
    distance: {
        color: 'white',
        fontSize: window.height / 20,
        marginLeft: 5,
    },
    description: {
        color: '#29B6F6',
        fontSize: window.height / 40,
        marginLeft: 10,
    },
    place: {
        color: 'white',
        fontSize: window.height / 50,
        position:'absolute',
        bottom:0,
        left:10
    },
    bottom: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sign: {
        flex: 3,
        marginLeft: 10,
        color:'#9E9E9E'
    },
    button: {
        backgroundColor: '#263238',
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    opacitycomment: {
        backgroundColor: '#29B6F6',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacitylike: {
        backgroundColor: '#9E9E9E',
        borderRadius: 20,

    },
    imagecomment: {
        resizeMode: 'contain',
        width: window.width / 10,
        height: window.height / 20,
        margin: 7
    },
    imagelike: {
        resizeMode: 'contain',
        width: window.width / 10,
        height: window.height / 20,
        margin: 7
    }
})