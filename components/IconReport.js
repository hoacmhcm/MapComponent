import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class IconReport extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.opacity, { backgroundColor: this.props.backgroundColorIcon }]}
                    onPress={this.props.onPress}>
                    <Image style={styles.image} source={this.props.imagePath} />
                </TouchableOpacity>
                <Text style={styles.iconName}>{this.props.iconName}</Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacity: {
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 40,
    },
    image: {
        width: 70, height: 70, resizeMode: 'cover'
    },
    iconName: {
        fontSize: 17,
        color: 'white'
    }
})