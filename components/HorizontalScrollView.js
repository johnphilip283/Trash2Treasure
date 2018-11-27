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
  { img: require("../assets/t2t-img-1.jpg"), tags: ["kitchen", "electronics"] },
  { img: require("../assets/t2t-img-2.jpg"), tags: ["kitchen", "appliances"] },
  { img: require("../assets/t2t-img-3.jpg"), tags: ["kitchen", "appliances"] },
  { img: require("../assets/t2t-img-4.jpg"), tags: ["kitchen", "appliances"] },
  { img: require("../assets/t2t-img-5.png"), tags: ["kitchen", "appliances"] },
  { img: require("../assets/t2t-img-6.jpg"), tags: ["sunglasses"] },
  { img: require("../assets/t2t-img-7.jpg"), tags: ["books"] }
];

export default class HorizontalScrollView extends Component {
  render() {
    const { bookmarks, toggleBookmark } = this.props.screenProps;

    const views = sources.map((data, index) => {
      const bookmarked = bookmarks.includes(index);
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
                marginTop: 20,
                fontSize: 25,
                paddingBottom: 10
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
              onPress={() => toggleBookmark(index)}
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
