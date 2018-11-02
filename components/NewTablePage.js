import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { Actions, Router, Scene } from "react-native-router-flux";
//import styles from "./components/Style";

import HamburgerContainer from "./HamburgerContainer";

class NewTablePage extends Component {
  constructor(props) {
    super(props);
    this.state = { tableSelected: false };
  }

  getTable() {
    this.setState({ tableSelected: true });
  }

  render() {
    if (!this.state.tableSelected) {
      return (
        <HamburgerContainer
          navigation={this.props.navigation}
          title="Upload table"
        >
          <View style={styles.container}>
            <View style={styles.contentContainer}>
              <Text style={styles.welcome}>Create New Table</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.getTable()}
              >
                <Text> Take Photo </Text>
              </TouchableOpacity>
            </View>
          </View>
        </HamburgerContainer>
      );
    } else {
      return (
        <HamburgerContainer
          navigation={this.props.navigation}
          title="Upload table"
        >
          <View style={styles.container}>
            <View style={styles.contentContainer}>
              <Text style={styles.welcome}>New Table</Text>
            </View>
            <View style={styles.tableImage}>
              <TableImage />
            </View>
            <View style={styles.contentContainer}>
              <Tags />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("View Tables")}
              >
                <Text> Submit </Text>
              </TouchableOpacity>
            </View>
          </View>
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
    this.state = { tags: [], message: "" };
  }

  addTag(s) {
    this.state.tags.push(s);
    this.setState({ tags: this.state.tags, message: "" });
  }

  remove(tag) {
    var index = this.state.tags.indexOf(tag);
    if (index !== -1) {
      this.state.tags.splice(index, 1);
    }
    this.setState({ tags: this.state.tags, message: this.state.message });
  }

  render() {
    const list = this.state.tags.map((text, idx) => {
      return (
        <View key={idx} style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.remove({ text }.text)}
          >
            <Text> {text} </Text>
          </TouchableOpacity>
        </View>
      );
    });

    return (
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          clearTextOnFocus={true}
          placeholder="Type a Tag!"
          value={this.state.message}
          onSubmitEditing={text => this.addTag(text.nativeEvent.text)}
          placeholderTextColor="rgba(0,0,0,.7)"
        />
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 20,
    marginTop: 20
  }
});

export default NewTablePage;
