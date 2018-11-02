import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";

import HomeScreen from "./hamburger/HomeScreen";
import VolunteerScreen from "./hamburger/VolunteerScreen";

export default class App extends Component {
  render() {
    return <MyApp />;
  }
}

const MyApp = createDrawerNavigator({
  "Home Screen": HomeScreen,
  Settings: HomeScreen,
  Volunteer: VolunteerScreen,
  "View Tables": HomeScreen,
  "View Map": HomeScreen,
  "Search Tags": HomeScreen,
  Profile: HomeScreen,
  Upload: HomeScreen
});
