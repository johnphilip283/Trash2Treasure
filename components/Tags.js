import React, { Component } from 'react';

import { Button } from 'native-base';
import {Text} from "react-native";

export default class Tags extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          this.props.tags.map((data, index) => {
              return(

                  <Button small style={{padding: 5, margin: 5}} key={index} disabled={true}>
                    <Text style={{color: 'white'}}>
                        {data}
                    </Text>
                  </Button>
              );
          })
        );
    }
}