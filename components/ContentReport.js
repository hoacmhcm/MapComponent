import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import IconReport from './IconReport'
import IconReportChoosen from './IconReportChoosen'

const window = Dimensions.get('window');

export default class ContentReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexChoosen: -1
        }
    }

    updateChoice(index) {
        console.log("index updateChoice " + index);
        this.setState({ indexChoosen: index });
        console.log("setState indexChoosen " + this.state.indexChoosen);
    }

    getSeleted = (index) => {
        console.log("index getSeleted" + index);
        if (index === this.state.indexChoosen) {
            return true
        } else {
            return false
        }
    }

    render() {
        const { state } = this.props.navigation;
        const { navigate, goBack } = this.props.navigation;
        console.log(this.state.indexChoosen);
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: '#374249' }} >
                    <TouchableOpacity style={styles.closeopacity}
                        onPress={() => { goBack() }}>
                        <Image style={styles.imageclose} source={require('../assets/close_icon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.mainicon}>
                        <IconReport imagePath={state.params.imagePath}
                            backgroundColorIcon={state.params.backgroundColorIcon}
                            iconName={state.params.iconName}
                            onPress={() => this.updateChoice(-1)}
                        />
                    </View>
                    <View style={styles.listicon} >
                        {state.params.iconChoosen.map((icon, index) =>
                            (
                                <IconReportChoosen
                                    key={icon.key}
                                    imagePath={icon.image}
                                    iconName={icon.name}
                                    onPress={() => { this.updateChoice(index) }}
                                    selected={this.getSeleted(index)} />
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
    closeopacity: {
        flex: 1,
        alignSelf: 'flex-end',
    },
    imageclose: {
        width: window.width / 10,
        height: window.height / 10,
        resizeMode: 'contain',
        marginRight: 10
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
        flexDirection: 'row',
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
    },

})