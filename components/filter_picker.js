import React from "react";
import { Picker } from "native-base";

export const FilterPicker = (props) => {
  const { pickables } = props;
  return (
      <Picker
        note
        mode="dropdown"
        selectedValue={pickables[0]}
        onValueChange={props.onValueChange}
      >
      {
        pickables.map((value, i) => {
          console.log(value);
          return <Picker.Item label={value} key={i} value={value} />;
        })
      }
      </Picker>
  );
}