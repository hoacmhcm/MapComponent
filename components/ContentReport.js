import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import IconReport from './IconReport'
import IconReportChoosen from './IconReportChoosen'

export default class ContentReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: []
        }
    }

    getFilterIcon(name) {
        switch (name) {
            case 'Traffic':
                {

                }
        }
    }
    render() {
        const { state } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.mainicon}>
                        <IconReport imagePath={state.params.imagePath}
                            backgroundColorIcon={state.params.backgroundColorIcon}
                            iconName={state.params.iconName} />
                    </View>
                    <View style={styles.listicon} >
                        {/* <IconReportChoosen imagePath={require('../assets/traffic/1.png')}
                            iconName={'Traffic'} />
                        <IconReportChoosen imagePath={require('../assets/traffic/2.png')}
                            iconName={'Traffic'} />
                        <IconReportChoosen imagePath={require('../assets/traffic/3.png')}
                            iconName={'Traffic'} /> */}
                        {state.params.iconChoosen.map((icon) => (
                            <IconReportChoosen imagePath={icon.image}
                                iconName={icon.name} />
                        ))}
                    </View>
                    <View style={styles.description} >

                    </View>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.opacitybutton}>
                        <Text style={styles.text}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    content: {
        flex: 9,
        backgroundColor: '#374249',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainicon: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listicon: {
        flex: 2,
        flexDirection: 'row',
    },
    description: {
        flex: 2.5,
    }
    ,
    button: {
        flex: 1,
        backgroundColor: '#263238',
        alignItems: 'center',
        justifyContent: 'center',
    },
    opacitybutton: {
        flex: 1,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 10,
        backgroundColor: '#80D8FF',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30
    }


})