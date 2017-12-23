import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import IconReport from './IconReport'

export default class SendReport extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Send a report</Text>
                </View>
                <View style={styles.row1}>
                    <IconReport imagePath={require('../assets/icon_report_traffic.png')}
                        backgroundColorIcon={'#E57373'} 
                        iconName={'Police'}/>
                    <IconReport imagePath={require('../assets/icon_report_police.png')}
                        backgroundColorIcon={'#80CBC4'} />
                    <IconReport imagePath={require('../assets/icon_report_accident.png')}
                        backgroundColorIcon={'#BDBDBD'} />
                </View>
                <View style={styles.row2}>
                    <IconReport imagePath={require('../assets/icon_report_hazard.png')}
                        backgroundColorIcon={'#FFB74D'} />
                    <IconReport imagePath={require('../assets/icon_report_chitchat.png')}
                        backgroundColorIcon={'#C5E1A5'} />
                    <IconReport imagePath={require('../assets/icon_report_map_issue.png')}
                        backgroundColorIcon={'#EEEEEE'} />
                </View>
                <View style={styles.row3}>
                    <IconReport imagePath={require('../assets/icon_report_places.png')}
                        backgroundColorIcon={'#E1BEE7'} />
                    <IconReport imagePath={require('../assets/icon_report_assistance.png')}
                        backgroundColorIcon={'#FF5252'} />
                    <IconReport imagePath={require('../assets/icon_report_speedcam.png')}
                        backgroundColorIcon={'#A5D6A7'} />
                </View>
                <View style={styles.row4}>
                    <IconReport imagePath={require('../assets/icon_report_closure.png')}
                        backgroundColorIcon={'#FF8A65'} />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#374249',
        flexDirection: 'column'
    },
    headerContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'white',
        fontSize: 20
    },
    row1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
    },
    row2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
    },
    row3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
    },
    row4: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
        marginBottom:50
    },

})