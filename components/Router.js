import React from 'react'
import { StackNavigator } from "react-navigation";
import Map from './Map'
import SendReport from './SendReport'

const Navigator = StackNavigator(
    {
        Map: {
            path: '/',
            screen: Map
        },
        Report: {
            path: '/report',
            screen: SendReport
        },
    },
    {
        initialRouteName: 'Map',
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false
        }),
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0
            }
        })
    }

);

export default Navigator;