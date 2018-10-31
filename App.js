import React, { Component } from "react";
import { createDrawerNavigator } from 'react-navigation'

import HomeScreen from './hamburger/HomeScreen';

export default class App extends Component {

    render() {
        return (
            <MyApp />
        )
    }
}

const MyApp = createDrawerNavigator({
        "Home Screen": HomeScreen,
        "Settings": HomeScreen,
        "Volunteer": HomeScreen,
        "View Tables": HomeScreen,
        "View Map": HomeScreen,
        "Search Tags": HomeScreen,
        "Profile": HomeScreen,
        "Upload": HomeScreen
    });

