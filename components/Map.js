import React, { Component } from "react";

import { View, Image, Text } from "react-native";

import HamburgerContainer from "./HamburgerContainer";

export default class Map extends Component {
  render() {
    return (
      <HamburgerContainer navigation={this.props.navigation} title="Map">
          <View style={{
              backgroundColor: "#d3d3d3",
              padding: 10
          }}>
              <Text
              style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: 18
              }}
              >
                  The tables here are the ones that show up in the actual Trash2Treasure venue. Shop around in the
                  View Tables tab, and then come back here to find your items in real life!
              </Text>
          </View>
        <Image
          style={{ flex: 1, alignSelf: "center" }}
          source={require("../assets/tables.png")}
          resizeMode="contain"
        />
      </HamburgerContainer>
    );
  }
}
