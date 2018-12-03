import React, { Component } from 'react';
import { Content, DatePicker, Text } from 'native-base';


export default class DataPicker extends Component {
  render() {
    return (
        <Content>
          <DatePicker
            defaultDate={new Date(Date.now())}
            minimumDate={ new Date(Date.now())}
            maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.props.setDate}
            />
        </Content>
    );
  }
}