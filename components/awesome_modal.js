import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import DatePickerExample from './date_picker';

export class BaseModalScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button>
            <Text> My modal is awesome.</Text>
          </Button>
          <DatePickerExample />
        </Content>
      </Container>
    );
  }
}

export const ModalScreen = withNavigation(BaseModalScreen);
