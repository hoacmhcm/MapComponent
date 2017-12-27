import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native'

const window = Dimensions.get('window')

export default class CommentItem extends Component {
    render() {
        const { image, name, comment, time } = this.props.myComment;
        return (
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Image style={styles.imageavatar} source={image} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.comment}>{comment}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238',
        flexDirection: 'row'
    },
    avatar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    content: {
        flex: 9,
        marginLeft: 10
    },
    imageavatar: {
        resizeMode: 'contain',
        width: window.width / 10,
        height: window.width / 10,
    },
    name: {
        color: 'white'
    },
    comment: {
        color: 'white',
        fontWeight: 'bold'
    },
    time: {
        color: '#757575',

    }
})