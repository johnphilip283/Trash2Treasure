import React, { Component } from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import BookmarksScreen from "./hamburger/BookmarksScreen";

import VolunteerScreen from "./hamburger/VolunteerScreen";

import Map from "./components/Map";
import HorizontalScrollView from "./components/HorizontalScrollView";
import NewTablePage from "./components/NewTablePage";
import MyCamera from "./components/Camera";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      // list of {date:<string>, time:<string>}
      volunteerSlots: []
    };
  }

  toggleBookmark = tableID => {
    const idx = this.state.bookmarks.indexOf(tableID);
    if (idx === -1) {
      this.state.bookmarks.push(tableID);
    } else {
      this.state.bookmarks.splice(idx, 1);
    }
    this.setState(this.state.bookmarks);
  };

  editVolunteerSlot = (time, date, isAdding = true) => {
    const idx = this.state.volunteerSlots.findIndex(
      slot => slot.date === date && slot.time === time
    );

    if ((isAdding && idx !== -1) || (!isAdding && idx === -1)) {
      // Do nothng in these cases
      return;
    }

    if (idx === -1) {
      this.state.volunteerSlots.push({ date, time });
    } else {
      this.state.volunteerSlots.splice(idx, 1);
    }
    this.setState(this.state.volunteerSlots);
  };

  render() {
    const { bookmarks, volunteerSlots } = this.state;

    return (
      <DrawerApp
        screenProps={{
          bookmarks,
          toggleBookmark: this.toggleBookmark,
          volunteerSlots,
          editVolunteerSlot: this.editVolunteerSlot
        }}
      />
    );
  }
}

const TableStack = createStackNavigator(
  {
    Upload: NewTablePage,
    Camera: MyCamera
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const DrawerApp = createDrawerNavigator({
  "View Tables": HorizontalScrollView,
  "View Map": Map,
  Bookmarks: BookmarksScreen,
  Volunteer: VolunteerScreen,
  //   FIXME: implement these later
  //   "Search Tags": HomeScreen,
  //   Profile: HomeScreen,
  Upload: TableStack
});
