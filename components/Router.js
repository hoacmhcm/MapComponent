import React from 'react'
import { StackNavigator } from "react-navigation";
import Map from './Map'
import SendReport from './SendReport'
import ContentReport from './ContentReport'
import Comment from './Comment'
import ContentMarker from './ContentMarker'

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
        Comment: {
            path: '/comment',
            screen: Comment
        },
        ContentMarker: {
            path: '/contentmarker',
            screen: ContentMarker
        }
    },
    {
        initialRouteName: 'Comment',
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