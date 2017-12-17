import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'

const window = Dimensions.get('window');

export default class ContentMarker extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.title} > {this.props.curMarker.title}</Text>
                    <Text style={styles.description} > {this.props.curMarker.description}</Text>
                    <Text style={styles.place} > Thủ Đức Thành phố Hồ Chí Minh</Text>
                </View >
                <View style={styles.image}>
                    <Image source={this.props.curMarker.image} />
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
        flexDirection: 'row'
    },
    info: {
        flex: 3
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        flex: 1.5
    }
    ,
    title: {
        marginTop:window.height/40,
        alignSelf:'center',
        color:'red',
        fontSize:window.height/15
    }
    ,
    description: {
        color:'white',
        marginTop:window.height/70,
        fontSize:window.height/40,
        marginLeft:10,
    },
    

})