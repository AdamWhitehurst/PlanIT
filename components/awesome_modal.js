import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
export class BaseModalScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button>
            <Text> My modal is awesome.</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export const ModalScreen = withNavigation(BaseModalScreen);
