import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";
import HomeScreen from "./hamburger/HomeScreen";
import VolunteerScreen from "./hamburger/VolunteerScreen";

import Map from "./components/Map";
import HorizontalScrollView from "./components/HorizontalScrollView";
import NewTablePage from "./components/NewTablePage";

export default class App extends Component {
  render() {
    return <MyApp />;
  }
}

const MyApp = createDrawerNavigator({
  "View Tables": HorizontalScrollView,
  "View Map": Map,
  //   "Home Screen": HomeScreen,
  Volunteer: VolunteerScreen,

  //   FIXME: implement these later
  //   "Search Tags": HomeScreen,
  //   Profile: HomeScreen,
  Upload: NewTablePage
});
