import React from 'react';
import { View, Text, Button } from 'native-base';

class HelloComponent extends React.Component {
  render(){
    return (
      <View>
        <Text>{"Array:" + this.props.textArray}</Text>
        <Button onPress={()=>this.props.onClick("Random Message Here")}>
          <Text>Add</Text>
        </Button>
      </View>
    )
  }
}

export default HelloComponent;