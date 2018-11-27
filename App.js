import React, { Component } from "react";
import { createDrawerNavigator,createStackNavigator} from "react-navigation";
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
      bookmarks: []
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

  render() {
    const { bookmarks } = this.state;

    return (
      <DrawerApp
        screenProps={{ bookmarks, toggleBookmark: this.toggleBookmark }}
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
        mode: "modal"
    }
);


const DrawerApp = createDrawerNavigator({
  "View Tables": HorizontalScrollView,
  "View Map": Map,
  Bookmarks: BookmarksScreen,
  //   "Home Screen": HomeScreen,
  Volunteer: VolunteerScreen,
        //   FIXME: implement these later
        //   "Search Tags": HomeScreen,
        //   Profile: HomeScreen,
        Upload: TableStack
}


