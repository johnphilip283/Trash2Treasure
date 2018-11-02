import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text
} from "react-native";
import { Row, Button } from "native-base";

import HamburgerContainer from "./HamburgerContainer";
import Tags from "./Tags";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const sources = [
  { img: require("../assets/thor.png"), tags: ["marvel", "superhero"] },
  { img: require("../assets/deadpool.png"), tags: ["marvel", "superhero"] },
  {
    img: require("../assets/doctorstrange.png"),
    tags: ["marvel", "superhero"]
  },
  { img: require("../assets/antman.png"), tags: ["marvel", "superhero"] },
  {
    img: require("../assets/captainamerica.png"),
    tags: ["marvel", "superhero"]
  },
  { img: require("../assets/waffle.png"), tags: ["appliances", "kitchen"] }
];

export default class HorizontalScrollView extends Component {
  constructor() {
    super();
  }

  render() {
    const views = sources.map((data, index) => {
      return (
        <View
          style={{
            backgroundColor: "#D3D3D3",
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            justifyContent: "center",
            alignItems: "center"
          }}
          key={index}
        >
          <Image source={data.img} style={styles.img} resizeMode="contain" />

          <View
            style={{
              backgroundColor: "#ffffff",
              flex: 1,
              marginTop: screenHeight * 0.15,
              width: screenWidth,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                marginTop: 20
              }}
            >
              Table {index + 1}
            </Text>

            <Row>
              <Tags tags={data.tags} />
            </Row>
          </View>
        </View>
      );
    });

    return (
      <HamburgerContainer navigation={this.props.navigation} title="Tables">
        <ScrollView horizontal={true} pagingEnabled={true}>
          {views}
        </ScrollView>
      </HamburgerContainer>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: screenWidth,
    height: screenHeight,
    flex: 1,
    marginTop: screenHeight * 0.2
  }
});
