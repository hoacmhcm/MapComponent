import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'

const window = Dimensions.get('window')
import CommentItem from './CommentItem'


export default class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: [{
                id: 1,
                image: require('../assets/avatar.jpg'),
                name: 'Chau Minh Hoa',
                comment: 'Cám ơn bạn !!!',
                time: '2 sec ago'
            }, {
                id: 2,
                image: require('../assets/avatar.jpg'),
                name: 'Nguyen Thanh Thai',
                comment: 'Rất bổ ích !!!',
                time: '2 min ago'
            },
            ]
        }
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        console.log(this.comment)
        return (
            <View style={styles.container}>
                <View style={styles.post}>
                    <View style={styles.toppost}>
                        <View style={styles.image}>
                            <Image style={styles.reportimage} source={require('../assets/traffic_bar_report_police.png')} />
                        </ View>
                        <View style={styles.contentpost}>
                            <Text style={styles.title}>Police (hidden)</Text>
                            <Text style={styles.distance}>20 m away</Text>
                            <Text style={styles.place}>Hữu Nghị , TPHCM</Text>
                            <Text style={styles.description}>Có cảnh sát đang núp gần đấy!!!</Text>
                            <Text style={styles.time}>16 sec ago</Text>
                        </ View>
                        <View style={styles.closepost}>
                            <TouchableOpacity onPress={() => { goBack() }}>
                                <Image style={styles.closeimage} source={require('../assets/button_report_close.png')} />
                            </TouchableOpacity>
                        </ View>
                    </ View>
                    <View style={styles.bottompost}>

                    </ View>
                </ View>
                <View style={styles.listcomment}>
                    <FlatList keyExtractor={item => item.id}
                        data={this.state.comment}
                        renderItem={({ item }) => <CommentItem myComment={item} />} />
                </ View>
                <View style={styles.bottom}>
                    <View style={styles.viewcomment}>
                        <View style={styles.comment}>
                            <TextInput placeholderTextColor={'#616161'}
                                underlineColorAndroid={'transparent'}
                                placeholder={'Add a comment'} />
                        </ View>
                        {/* <View style={styles.send}>
                            <Image source={require('../assets/blue_comments_send_icon.png')} />
                        </ View> */}
                    </ View>
                </ View>
            </ View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    post: {
        flex: 3.5,
        backgroundColor: '#1A2128'
    },
    toppost: {
        flex: 8.5,
        flexDirection: 'row'
    },
    image: {
        flex: 2.5,
        alignItems: 'center'
    },
    contentpost: {
        flex: 6.5,
        paddingLeft: 10
    },
    closepost: {
        flex: 1,
    },
    bottompost: {
        flex: 1.5,
    },
    listcomment: {
        flex: 5.5,
        backgroundColor: '#263238'
    },
    bottom: {
        flex: 1,
        backgroundColor: '#1A2128'
    },
    closeimage: {
        resizeMode: 'contain',
        width: window.width / 10,
        height: window.height / 10,
    },
    reportimage: {
        resizeMode: 'contain',
        width: window.width / 5,
        height: window.height / 5,
    },
    title: {
        marginTop: window.height / 100,
        fontSize: window.height / 30,
        color: '#CFD8DC'
    },
    distance: {
        fontSize: window.height / 25,
        color: 'white'
    },
    place: {
        fontSize: window.height / 40,
        color: 'white'
    },
    description: {
        marginTop: window.height / 100,
        color: '#29B6F6'
    },
    time: {
        position: 'absolute',
        bottom: 0,
        left: 10,
        color: '#9E9E9E'
    },
    viewcomment: {
        backgroundColor: '#424242',
        borderRadius: 10,
        flex: 1,
        margin: 10,
    },
    comment: {
        flex:9
    },
    send: {
    }

})