import React, { Component } from "react";

import { Dimensions, Image } from "react-native";

import HamburgerContainer from "./HamburgerContainer";

export default class Map extends Component {
  render() {
    return (
      <HamburgerContainer navigation={this.props.navigation} title="Map">
        <Image
          style={{ flex: 1, alignSelf: "center" }}
          source={require("../assets/tables.png")}
          resizeMode="contain"
        />
      </HamburgerContainer>
    );
  }
}
