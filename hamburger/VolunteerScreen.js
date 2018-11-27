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
const slots = [
  "8:00AM - 9:00AM",
  "9:00AM - 10:00AM",
  "10:00AM - 11:00AM",
  "11:00AM - 12:00PM",
  "12:00PM - 1:00PM",
  "1:00PM - 2:00PM",
  "2:00PM - 3:00PM",
  "5:00PM - 6:00PM"
];
const yourSlots = ["12:00PM - 1:00PM", "2:00PM - 3:00PM"];

export default class Volunteer extends Component {
  constructor(props) {
    super(props);

    yourSlots.forEach(slot => {
      props.screenProps.editVolunteerSlot(slot, "Thursday, August 30, 2018");
    });

    this.state = {
      selectedView: SIGNUP,
      date: "Thursday, August 30, 2018",
      // list of {date:<string>, time:<string>}
      // TODO this should be a dict of date:<list of times>
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

  signUpForSlot = time => {
    this.props.screenProps.editVolunteerSlot(time, this.state.date);
    this.setState({
      confirmedSlots: [
        ...this.state.confirmedSlots,
        { time, date: this.state.date }
      ]
    });
  };

  removeSlot = ({ date, time }) => {
    this.props.screenProps.editVolunteerSlot(time, date, false);
    const idx = this.state.confirmedSlots.findIndex(
      s => s.date === date && s.time === time
    );
    if (idx !== -1) {
      this.state.confirmedSlots.splice(idx, 1);
      this.setState({
        confirmedSlots: this.state.confirmedSlots
      });
    }
  };

  render() {
    const { volunteerSlots } = this.props.screenProps;
    const confirmedTimesForDate = this.state.confirmedSlots
      .filter(s => s.date === this.state.date)
      .map(s => s.time);
    const availableSlots = slots.filter(
      slot =>
        confirmedTimesForDate.includes(slot) ||
        !volunteerSlots.find(s => s.date === this.state.date && s.time === slot)
    );
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
              <Text style={{ paddingLeft: 12 }}>Date</Text>
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
                  {confirmedTimesForDate.includes(slot) ? (
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
            {volunteerSlots.map(slot => (
              <ListItem key={slot.date + slot.time}>
                <Body>
                  <Text>{slot.time}</Text>
                  <Text note>{slot.date}</Text>
                </Body>
                <Right>
                  <Button
                    small
                    danger
                    onPress={() => this.removeSlot(slot)}
                    accessibilityLabel="Remove this slot"
                  >
                    <Icon name="trash" />
                  </Button>
                </Right>
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
