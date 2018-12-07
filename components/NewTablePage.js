import React, { Component } from "react";
import {
  StyleSheet,
  //   Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  Alert
} from "react-native";
import { Content, Button, Text, Icon, Item, Input, Toast } from "native-base";

import HamburgerContainer from "./HamburgerContainer";

class NewTablePage extends Component {
  constructor(props) {
    super(props);
    this.state = { tableSelected: false };
  }

  showSubmitConfirmation = () => {
    Toast.show({
      text:
        "The table has been successfully received and is pending admin approval.",
      buttonText: "OK",
      type: "success",
      duration: 2500
    });
  };

  render() {
    if (!this.state.tableSelected) {
      return (
        <HamburgerContainer
          navigation={this.props.navigation}
          title="Add Table"
        >
          <Content>
            <View style={styles.contentContainer}>
              <Text style={styles.welcome}>Create New Table</Text>
              <Button
                block
                onPress={() => {
                  setTimeout(() => {
                    // Hack to make it not show while the camera slides in
                    this.setState({ tableSelected: true });
                  }, 100);
                  this.props.navigation.push("Camera");
                }}
              >
                <Icon name="camera" />
                <Text> Take Photo </Text>
              </Button>
            </View>
          </Content>
        </HamburgerContainer>
      );
    } else {
      return (
        <HamburgerContainer
          navigation={this.props.navigation}
          title="Add Table"
        >
          <Content>
            <View style={styles.container}>
              <View style={styles.contentContainer}>
                <Text style={styles.welcome}>Table 8</Text>
              </View>
              <View style={styles.tableImage}>
                <TableImage />
              </View>

              <View style={styles.contentContainer}>
                <Button
                  onPress={() => this.props.navigation.push("Camera")}
                  style={styles.centeredButton}
                >
                  <Icon name="reverse-camera" />
                  <Text>Retake</Text>
                </Button>

                <Tags />

                <Button
                  success
                  onPress={this.showSubmitConfirmation}
                  style={styles.centeredButton}
                >
                  <Text> Submit </Text>
                </Button>
              </View>
            </View>
          </Content>
        </HamburgerContainer>
      );
    }
  }
}

class TableImage extends Component {
  render() {
    return (
      <View style={styles.tableImage}>
        <Image
          source={require("../assets/table.png")}
          style={styles.tableImage}
          resizeMode="contain"
        />
      </View>
    );
  }
}

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: [], text: "" };
  }

  addTag(s) {
    //   Dont add empty strings or duplicates
    if (s && !this.state.tags.includes(s)) {
      this.state.tags.push(s);
      this.setState({ tags: this.state.tags, text: "" });
    }
  }

  remove(tag) {
    var index = this.state.tags.indexOf(tag);
    if (index !== -1) {
      this.state.tags.splice(index, 1);
    }
    this.setState({ tags: this.state.tags });
  }

  render() {
    const list = this.state.tags.map((text, idx) => {
      return (
        <View key={idx} style={styles.contentContainer}>
          <Button
            small
            onPress={() => this.remove({ text }.text)}
            style={styles.tagButton}
          >
            <Text style={styles.tagLabel}> {text} </Text>
            <Icon name="close" style={styles.tagLabel} />
          </Button>
        </View>
      );
    });

    return (
      <View style={styles.contentContainer}>
        <Item regular>
          <Input
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            placeholder="Add a tag"
            onSubmitEditing={text => this.addTag(text.nativeEvent.text)}
          />
        </Item>
        {/* <TextInput
          style={styles.input}
          clearTextOnFocus={true}
          placeholder="Type a Tag!"
          value={this.state.message}
          onSubmitEditing={text => this.addTag(text.nativeEvent.text)}
          placeholderTextColor="rgba(0,0,0,.7)"
        /> */}
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>{list}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tableImage: {
    width: Dimensions.get("window").width,
    height: 200,
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  contentContainer: {
    alignItems: "center",
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: "rgba(255,255,255,.2)",
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 10
  },
  container1: {
    padding: 20
  },
  centeredButton: {
    alignSelf: "center"
    // backgroundColor: "#DDDDDD",
    // padding: 10,
    // marginBottom: 20,
    // marginTop: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 20,
    marginTop: 20
  },
  tagButton: {
    backgroundColor: "#dddddd"
  },
  tagLabel: {
    color: "#777777",
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 0,
    paddingRight: 0
  }
});

export default NewTablePage;
