import {Router, Scene} from "react-native-router-flux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import React, { Component } from "react";

export default class ScreenSwitch extends Component {

    render() {
        return (
            <Router>
                <Scene key = 'root'>
                    <Scene  key = 'signIn'
                            component = {SignIn}
                            title = "Sign In">
                        initial
                    </Scene>

                    <Scene  key = 'signUp'
                            component = {SignUp}
                            title = "Sign Up">
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

