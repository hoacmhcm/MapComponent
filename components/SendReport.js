import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import IconReport from './IconReport'

export default class SendReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iconArray: [
                {
                    imagePath: require('../assets/icon_report_traffic.png'),
                    backgroundColorIcon: '#E57373',
                    iconName: 'Traffic',
                    iconChoosen: [{
                        image: require('../assets/traffic/1.png'),
                        name: 'Moderate',
                        key:0
                    },
                    {
                        image: require('../assets/traffic/2.png'),
                        name: 'Heavy',
                        key:1
                    },
                    {
                        image: require('../assets/traffic/3.png'),
                        name: 'Heavy',
                        key:2
                    },
                    ]
                },
                {
                    imagePath: require('../assets/icon_report_police.png'),
                    backgroundColorIcon: '#80CBC4',
                    iconName: 'Police',
                    iconChoosen: [{
                        image: require('../assets/police/1.png'),
                        name: 'Visible',
                        key:3
                    },
                    {
                        image: require('../assets/police/2.png'),
                        name: 'Hidden',
                        key:4
                    },
                    {
                        image: require('../assets/police/3.png'),
                        name: 'Other side',
                        key:5
                    },
                    ]
                },
                {
                    imagePath: require('../assets/icon_report_accident.png'),
                    backgroundColorIcon: '#BDBDBD',
                    iconName: 'Crash',
                    iconChoosen: [{
                        image: require('../assets/accident/1.png'),
                        name: 'Minor',
                        key:6
                    },
                    {
                        image: require('../assets/accident/2.png'),
                        name: 'Major',
                        key:7
                    },
                    {
                        image: require('../assets/accident/3.png'),
                        name: 'Other side',
                        key:8
                    },
                    ]
                },
                {
                    imagePath: require('../assets/icon_report_hazard.png'),
                    backgroundColorIcon: '#FFB74D',
                    iconName: 'Hazard',
                    iconChoosen: [{
                        image: require('../assets/hazard/1.png'),
                        name: 'On road',
                        key:9
                    },
                    {
                        image: require('../assets/hazard/2.png'),
                        name: 'Shoulder',
                        key:10
                    },
                    {
                        image: require('../assets/hazard/3.png'),
                        name: 'Weather',
                        key:11
                    },
                    ]
                },
                {
                    imagePath: require('../assets/icon_report_chitchat.png'),
                    backgroundColorIcon: '#C5E1A5',
                    iconName: 'Map chat',
                    iconChoosen: []
                },
                {
                    imagePath: require('../assets/icon_report_map_issue.png'),
                    backgroundColorIcon: '#EEEEEE',
                    iconName: 'Map issue',
                    iconChoosen: [{
                        image: require('../assets/map_issue/1.png'),
                        name: 'Map issue',
                        key:12
                    },
                    {
                        image: require('../assets/map_issue/2.png'),
                        name: 'Pave',
                        key:13
                    },
                    ]
                },
                {
                    imagePath: require('../assets/icon_report_places.png'),
                    backgroundColorIcon: '#E1BEE7',
                    iconName: 'Place',
                    iconChoosen: []
                },
                {
                    imagePath: require('../assets/icon_report_assistance.png'),
                    backgroundColorIcon: '#FF5252',
                    iconName: 'Roadside help',
                    iconChoosen: [
                        {
                            image: require('../assets/assistance/1.png'),
                            name: 'Fellow Wazers',
                            key:14
                        },
                        {
                            image: require('../assets/assistance/2.png'),
                            name: 'Emergency call',
                            key:15
                            
                        },
                        {
                            image: require('../assets/assistance/3.png'),
                            name: 'Placeholder',
                            key:16
                        },
                    ]
                },
                {
                    imagePath: require('../assets/icon_report_speedcam.png'),
                    backgroundColorIcon: '#A5D6A7',
                    iconName: 'Camera',
                    iconChoosen: [
                        {
                            image: require('../assets/speedcam/1.png'),
                            name: 'Speed',
                            key:17
                        },
                        {
                            image: require('../assets/speedcam/2.png'),
                            name: 'Red light',
                            key:18
                        },
                        {
                            image: require('../assets/speedcam/3.png'),
                            name: 'Fake',
                            key:19
                        },
                    ]
                },
                {
                    imagePath: require('../assets/icon_report_closure.png'),
                    backgroundColorIcon: '#FF8A65',
                    iconName: 'Closure',
                    iconChoosen: []
                },
            ]
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Send a report</Text>
                </View>
                <View style={styles.row1}>
                    <IconReport imagePath={this.state.iconArray[0].imagePath}
                        backgroundColorIcon={this.state.iconArray[0].backgroundColorIcon}
                        iconName={this.state.iconArray[0].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[0].imagePath,
                            backgroundColorIcon: this.state.iconArray[0].backgroundColorIcon,
                            iconName: this.state.iconArray[0].iconName,
                            iconChoosen: this.state.iconArray[0].iconChoosen
                        })} />
                    <IconReport imagePath={this.state.iconArray[1].imagePath}
                        backgroundColorIcon={this.state.iconArray[1].backgroundColorIcon}
                        iconName={this.state.iconArray[1].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[1].imagePath,
                            backgroundColorIcon: this.state.iconArray[1].backgroundColorIcon,
                            iconName: this.state.iconArray[1].iconName,
                            iconChoosen: this.state.iconArray[1].iconChoosen
                        })} />
                    <IconReport imagePath={this.state.iconArray[2].imagePath}
                        backgroundColorIcon={this.state.iconArray[2].backgroundColorIcon}
                        iconName={this.state.iconArray[2].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[2].imagePath,
                            backgroundColorIcon: this.state.iconArray[2].backgroundColorIcon,
                            iconName: this.state.iconArray[2].iconName,
                            iconChoosen: this.state.iconArray[2].iconChoosen
                        })} />
                </View>
                <View style={styles.row2}>
                    <IconReport imagePath={this.state.iconArray[3].imagePath}
                        backgroundColorIcon={this.state.iconArray[3].backgroundColorIcon}
                        iconName={this.state.iconArray[3].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[3].imagePath,
                            backgroundColorIcon: this.state.iconArray[3].backgroundColorIcon,
                            iconName: this.state.iconArray[3].iconName,
                            iconChoosen: this.state.iconArray[3].iconChoosen
                        })} />
                    <IconReport imagePath={this.state.iconArray[4].imagePath}
                        backgroundColorIcon={this.state.iconArray[4].backgroundColorIcon}
                        iconName={this.state.iconArray[4].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[4].imagePath,
                            backgroundColorIcon: this.state.iconArray[4].backgroundColorIcon,
                            iconName: this.state.iconArray[4].iconName,
                            iconChoosen: this.state.iconArray[4].iconChoosen
                        })} />
                    <IconReport imagePath={this.state.iconArray[5].imagePath}
                        backgroundColorIcon={this.state.iconArray[5].backgroundColorIcon}
                        iconName={this.state.iconArray[5].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[5].imagePath,
                            backgroundColorIcon: this.state.iconArray[5].backgroundColorIcon,
                            iconName: this.state.iconArray[5].iconName,
                            iconChoosen: this.state.iconArray[5].iconChoosen
                        })} />
                </View>
                <View style={styles.row3}>
                    <IconReport imagePath={this.state.iconArray[6].imagePath}
                        backgroundColorIcon={this.state.iconArray[6].backgroundColorIcon}
                        iconName={this.state.iconArray[6].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[6].imagePath,
                            backgroundColorIcon: this.state.iconArray[6].backgroundColorIcon,
                            iconName: this.state.iconArray[6].iconName,
                            iconChoosen: this.state.iconArray[6].iconChoosen
                        })} />
                    <IconReport imagePath={this.state.iconArray[7].imagePath}
                        backgroundColorIcon={this.state.iconArray[7].backgroundColorIcon}
                        iconName={this.state.iconArray[7].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[7].imagePath,
                            backgroundColorIcon: this.state.iconArray[7].backgroundColorIcon,
                            iconName: this.state.iconArray[7].iconName,
                            iconChoosen: this.state.iconArray[7].iconChoosen
                        })} />
                    <IconReport imagePath={this.state.iconArray[8].imagePath}
                        backgroundColorIcon={this.state.iconArray[8].backgroundColorIcon}
                        iconName={this.state.iconArray[8].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[8].imagePath,
                            backgroundColorIcon: this.state.iconArray[8].backgroundColorIcon,
                            iconName: this.state.iconArray[8].iconName,
                            iconChoosen: this.state.iconArray[8].iconChoosen
                        })} />
                </View>
                <View style={styles.row4}>
                    <IconReport imagePath={this.state.iconArray[9].imagePath}
                        backgroundColorIcon={this.state.iconArray[9].backgroundColorIcon}
                        iconName={this.state.iconArray[9].iconName}
                        onPress={() => navigate('ContentReport', {
                            imagePath: this.state.iconArray[9].imagePath,
                            backgroundColorIcon: this.state.iconArray[9].backgroundColorIcon,
                            iconName: this.state.iconArray[9].iconName,
                            iconChoosen: this.state.iconArray[9].iconChoosen
                        })} />
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
        marginBottom: 50
    },
})