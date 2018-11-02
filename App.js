import React, { Component } from "react";
import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './hamburger/HomeScreen';
import Map from './components/Map';
import HorizontalScrollView from './components/HorizontalScrollView';

export default class App extends Component {

    render() {
        return (
            <MyApp />
        )
    }
}


const MyApp = createDrawerNavigator({
        "Home Screen": HomeScreen,
        "Volunteer": HomeScreen,
        "View Tables": HomeScreen,
        "View Map": Map,
        "Search Tags": HomeScreen,
        "Profile": HomeScreen,
        "Upload": HomeScreen
    });