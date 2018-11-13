import React from "react";
import { Body, Icon, CheckBox, ListItem } from "native-base";
import { Input, Button } from "native-base";

export default class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    const title = "";
    const completed = false;
    const createdAt = "";

    this.state = {
      title,
      completed,
      createdAt
    };
  }

  setStateUtil = (property, value) => {
    this.setState({
      [property]: value
    });
  };

  render() {
    //const completed = false;
    const { completed, title } = this.state;
    const { onPress, onCancel } = this.props;
    return (
      <ListItem>
        <CheckBox
          checked={completed}
          //onPress = { () => console.log("set todo as completed") }
          onPress={() => this.setStateUtil("completed", !completed)}
        />
        <Body>
          <Input
            placeholder="What needs to be done?"
            onChangeText={txt => this.setStateUtil("title", txt)}
            onSubmitEditing={() => onPress(this.state)}
          />
        </Body>
        <Button
          transparent
          //onPress = { () => console.log("put todo in trash") }
          onPress={() => onCancel((show = false))}
        >
          <Icon name={"trash"} />
        </Button>
      </ListItem>
    );
  }
}
