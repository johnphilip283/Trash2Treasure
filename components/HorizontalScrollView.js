import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text
} from "react-native";
import { Row, Button, Icon } from "native-base";

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

    this.state = {
      // FIXME: this should be something other than the indices of the images in the sources list....
      bookmarks: []
    };
  }

  setBookmarkedTable = table => {
    if (this.state.bookmarks.includes(table)) {
      this.state.bookmarks = this.state.bookmarks.filter(b => b !== table);
    } else {
      this.state.bookmarks.push(table);
    }
    this.setState({
      bookmarks: this.state.bookmarks
    });
  };

  render() {
    const views = sources.map((data, index) => {
      const bookmarked = this.state.bookmarks.includes(index);
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

            <Button
              bordered
              rounded
              active={bookmarked}
              onPress={() => this.setBookmarkedTable(index)}
              style={{ alignSelf: "center", marginBottom: 20 }}
            >
              <Icon active={bookmarked} name="bookmark" />
            </Button>
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
