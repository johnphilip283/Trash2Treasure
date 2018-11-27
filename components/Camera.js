import React, { Component } from "react";
import {
  Platform,
  View,
  ImageBackground,
  StyleSheet,
  Alert,
  CameraRoll,
  Dimensions
} from "react-native";

import { Camera, Permissions } from "expo";
import { Button, Icon, Text } from "native-base";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default class MyCamera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasPermission: null,
      facing: Camera.Constants.Type.front,
      photo: null
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === "granted" });
  }

  render() {
    const { hasPermission } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (!hasPermission) {
      return <Text>No access to camera</Text>;
    } else if (this.state.photo !== null) {
      return this.renderPhotoPreview();
    } else {
      return this.renderCameraScreen();
    }
  }

  renderCameraScreen() {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={this.state.type}
          ref={cam => (this.camera = cam)}
        >
          <View style={styles.topBar}>
            <View style={styles.topLeftButton}>
              <Button small light rounded onPress={this.flipCamera}>
                <Icon name="camera" />
              </Button>
            </View>
          </View>

          <View style={styles.bottomBar}>
            <View style={styles.cameraButton}>
              <Button
                large
                warning
                rounded
                onPress={() => {
                  //   this.snapPhoto();
                  this.props.navigation.pop();
                }}
              >
                <Text>O</Text>
              </Button>
            </View>
          </View>
        </Camera>
      </View>
    );
  }

  renderPhotoPreview = () => {};

  cancelPhotoPreview = () => {
    this.setState({ photo: null });
  };

  snapPhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ base64: true });

      this.setState({ photo });
    }
  };

  flipCamera = () => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };
}

const styles = StyleSheet.create({
  bottomBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end" // Sets children at bottom of box
  },

  cameraButton: {
    justifyContent: "center",
    marginBottom: 30
  },

  sendButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 30,
    marginBottom: 30,
    alignSelf: "flex-end"
  },

  topBar: {
    flex: 1,
    flexDirection: "row", //Default for react native is column
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },

  topLeftButton: {
    paddingTop: 40,
    paddingLeft: 20
  },

  centerScreen: {
    position: "absolute",
    paddingTop: screenHeight / 2,
    paddingLeft: screenWidth / 2
  }
});
