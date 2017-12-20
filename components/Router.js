import React from 'react'
import { DrawerNavigator } from "react-navigation";
import Map from './Map'
import SendReport from './SendReport'

const DrawerRouter = DrawerNavigator(
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
    }
);

export default DrawerRouter;