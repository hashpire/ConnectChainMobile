import React from 'react';
import { View, Text, Button } from 'native-base';

class HelloComponent extends React.Component {
  render(){
    return (
      <View>
        <Text>{"Array:" + this.props.textArray}</Text>
        <Button onPress={()=>this.props.add("Random Message Here")}>
          <Text>Add33</Text>
        </Button>
        <Button onPress={()=>this.props.addAsync("Async")}>
          <Text>Add2</Text>
        </Button>
      </View>
    )
  }
}

export default HelloComponent;