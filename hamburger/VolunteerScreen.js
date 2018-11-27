import React, { Component } from "react";
import { StyleSheet, SegmentedControlIOS, View } from "react-native";
import {
  Content,
  Form,
  Item,
  DatePicker,
  Picker,
  Icon,
  Label,
  Grid,
  Row,
  Col,
  Text,
  Separator,
  Left,
  Right,
  Body,
  Button,
  List,
  ListItem
} from "native-base";

import HamburgerContainer from "../components/HamburgerContainer";

const SIGNUP = 0;
const CHECKIN = 1;

// Fake data!!
const dateOptions = [
  "Thursday, August 30, 2018",
  "Friday, August 31, 2018",
  "Saturday, September 1, 2018",
  "Sunday, September 2, 2018",
  "Monday, September 3, 2018"
];
const availableSlots = [
  "8:00AM - 9:00AM",
  "9:00AM - 10:00AM",
  "10:00AM - 11:00AM",
  "11:00AM - 12:00PM",
  "1:00PM - 2:00PM",
  "5:00PM - 6:00PM"
];
const yourSlots = ["12:00PM - 1:00PM", "2:00PM - 3:00PM"];

export default class Volunteer extends Component {
  constructor(props) {

    super(props);

    this.state = {
      selectedView: SIGNUP,
      date: null,
      // FIXME
      confirmedSlots: []
    };
  }

  setSelectedView = event => {
    this.setState({
      selectedView: event.nativeEvent.selectedSegmentIndex
    });
  };

  onDateChange = date => {
    this.setState({ date: date });
  };

  signUpForSlot = slot => {
    this.setState({
      confirmedSlots: [...this.state.confirmedSlots, slot]
    });
  };

  render() {
    return (
      <HamburgerContainer navigation={this.props.navigation} title="Volunteer">
        <Content>
          <SegmentedControlIOS
            values={["Sign up", "Check in"]}
            selectedIndex={this.state.selectedView}
            onChange={this.setSelectedView}
            style={styles.tabs}
            // FIXME: make this true. disabled for now b/c check-in is not one of our tasks for P5
            enabled={false}
          />

          <Row style={styles.row}>
            <Left style={styles.left}>
              <Text style={{paddingLeft: 12}}>Date</Text>
            </Left>
            <Right>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Select a date"
                selectedValue={this.state.date}
                onValueChange={this.onDateChange}
              >
                {dateOptions.map(date => (
                  <Picker.Item key={date} label={date} value={date} />
                ))}
              </Picker>
            </Right>
          </Row>

          <List>
            <ListItem itemDivider>
              <Text>Available slots</Text>
            </ListItem>
            {availableSlots.map(slot => (
              <ListItem key={slot}>
                <Body>
                  <Text>{slot}</Text>
                </Body>
                <Right style={styles.button}>
                  {this.state.confirmedSlots.includes(slot) ? (
                    <Col style={{ flex: 1, alignContent: "center" }}>
                      <Icon
                        name="checkmark-circle"
                        style={{ color: "green", alignSelf: "center" }}
                      />
                      <Text note>Registered!</Text>
                    </Col>
                  ) : (
                    <Button
                      small
                      onPress={() => this.signUpForSlot(slot)}
                      accessibilityLabel="Sign up for this slot"
                    >
                      <Text>Sign up</Text>
                    </Button>
                  )}
                </Right>
              </ListItem>
            ))}

            <ListItem itemDivider>
              <Text>Your slots</Text>
            </ListItem>
            {yourSlots.map(slot => (
              <ListItem key={slot}>
                <Text>{slot}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </HamburgerContainer>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    margin: 10
  },
  left: {
    flex: -1
  },
  row: {
    padding: 10
  },
  button: {
    flex: 1
  }
});
