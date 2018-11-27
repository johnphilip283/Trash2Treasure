import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Content, Accordion, Button, Row, Text, H3 } from "native-base";

import HamburgerContainer from "../components/HamburgerContainer";

export default class Bookmarks extends Component {
  goToTable = tableID => {
    this.props.navigation.navigate("View Tables", { id: tableID });
  };

  _renderContent = ({ content: id }) => {
    const { toggleBookmark } = this.props.screenProps;

    return (
      <Row
        style={{
          width: "100%",
          //   flex: 1,
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-around"
        }}
      >
        <Button danger onPress={() => toggleBookmark(id)} style={styles.button}>
          <Icon name="trash" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Delete</Text>
        </Button>
        <Button onPress={() => this.goToTable(id)} style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
          <Icon name="arrow-forward" style={styles.buttonIcon} />
        </Button>
      </Row>
    );
  };

  render() {
    const { bookmarks } = this.props.screenProps;

    const dataArray = bookmarks.map(id => {
      return {
        title: <H3>{`Table ${id + 1}`}</H3>,
        content: id
      };
    });
    return (
      <HamburgerContainer navigation={this.props.navigation} title="Bookmarks">
        <Content>
          {bookmarks.length > 0 ? (
            <Accordion
              dataArray={dataArray}
              renderContent={this._renderContent}
            />
          ) : (
            <View style={styles.centeredContainer}>
              <Text
                style={{
                  marginTop: "50%",
                  textAlign: "center",
                  textAlignVertical: "center"
                }}
              >
                No bookmarks found!
              </Text>
            </View>
          )}
        </Content>
      </HamburgerContainer>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    justifyContent: "center"
  },
  buttonText: {
    paddingLeft: 0,
    paddingRight: 0
  },
  buttonIcon: {
    marginLeft: 8,
    marginRight: 8
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
