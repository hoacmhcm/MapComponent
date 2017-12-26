import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import IconReport from './IconReport'
import IconReportChoosen from './IconReportChoosen'

const window = Dimensions.get('window');

export default class ContentReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexChoosen: -1,
            text: '',
        }
    }

    updateChoice(index) {
        // console.log("index updateChoice " + index);
        this.setState({ indexChoosen: index });
        // console.log("setState indexChoosen " + this.state.indexChoosen);
    }

    getSeleted = (index) => {
        // console.log("index getSeleted" + index);
        if (index === this.state.indexChoosen) {
            return true
        } else {
            return false
        }
    }

    submitReport(data) {
        if (this.state.indexChoosen === -1) {
            let report = {
                title: data.iconName,
                description: this.state.text,
                image: data.imagePath,
            }
            console.log(report);
        } else {
            let report = {
                title: data.iconChoosen[this.state.indexChoosen].name,
                description: this.state.text,
                image: data.iconChoosen[this.state.indexChoosen].image,
            }
            console.log(report.image);
        }
    }

    render() {
        const { state } = this.props.navigation;
        const { navigate, goBack } = this.props.navigation;
        // console.log(this.state.indexChoosen);
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
                        <Image style={styles.imageadddescription}
                            source={require('../assets/icon_reports_addtext.png')} />
                        <TextInput placeholder={'Add a description'}
                            style={styles.textinput}
                            placeholderTextColor={'#90A4AE'}
                            selectionColor={'#90A4AE'}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.stext} />
                    </View>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.opacitybutton}
                        onPress={() => { this.submitReport(state.params) }}>
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
        alignItems: 'center',
        justifyContent: 'center',
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
    imageadddescription: {
        width: window.width / 10,
        height: window.height / 10,
        resizeMode: 'contain',
        marginRight: 10,
        marginLeft: 50
    },
    textinput: {
        flexGrow: 1,
        marginRight: 50
    }

})