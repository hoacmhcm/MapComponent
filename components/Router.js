import React from 'react'
import { StackNavigator } from "react-navigation";
import Map from './Map'
import SendReport from './SendReport'
import ContentReport from './ContentReport'

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
        ContentReport: {
            path: '/contentreport',
            screen: ContentReport
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
        }),
    }

);

export default Navigator;