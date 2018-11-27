import React, { Component } from "react";

//library imports
import { Icon, Container, Header, Left, Body, Title, Right } from "native-base";

export default class HamburgerContainer extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" onPress={this.props.navigation.openDrawer} />
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
        {this.props.children}
      </Container>
    );
  }
}
