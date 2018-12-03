import React from 'react';
import { Container, Fab, Icon } from 'native-base';
import {withNavigation} from 'react-navigation';

class BaseSuperFAB extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false,
        };
    }

    render() {
        return (
            <Container>
                <Fab
                active={this.state.active}
                direction='up'
                position='bottomRight'
                onPress={() => this.setState( prevState => {return {active: !prevState.active};})}
                style={{ backgroundColor: '#5067FF' }}>
                    <Icon name="ios-paper-plane" />
                    <Fab
                    style={{ backgroundColor: 'green' }}
                    onPress={() => { this.props.navigation.navigate('MyModal')}}
                    >
                        <Icon name="add" />
                    </Fab>
                    <Fab
                    style={{ backgroundColor: 'purple' }}
                    >
                        <Icon name="ios-star" />
                    </Fab>
                    <Fab
                    style={{ backgroundColor: 'orange' }}
                    >
                        <Icon name="ios-color-palette" />
                    </Fab>
                </Fab>
            </Container>
        );
    }
}

export default withNavigation(BaseSuperFAB);