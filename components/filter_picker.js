import React from "react";
import { Picker, Content } from "native-base";

export class FilterPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.pickables[0],
    };
  }
  render () {
    return (
      <Picker
      note
      mode="dropdown"
      selectedValue={this.state.value}
      onValueChange={(value) => {
        this.setState({value: value});
        this.props.onValueChange(value)
        global.val = value;
        }}
      >
        {
          this.props.pickables.map((value, i) => {
            console.log(value);
            return <Picker.Item label={value} key={i} value={value} />;
           
          })
        }
        </Picker>
    );
  }
}