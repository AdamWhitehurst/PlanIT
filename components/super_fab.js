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
        const { fabs } = this.props; 
        return (
            <Container>
                <Fab
                active={this.state.active}
                direction='up'
                position='bottomRight'
                onPress={() => this.setState( prevState => {return {active: !prevState.active};})}
                style={{ backgroundColor: '#5067FF' }}>
                    <Icon name="ios-paper-plane" />

                    {
                        fabs.map ( (fab, index) => {
                            return (
                                <Fab
                                key = {index}
                                style={{ backgroundColor: fab.backgroundColor }}
                                onPress={fab.func}
                                >
                                    <Icon name={fab.icon} />
                                </Fab>
                            );
                        })
                    }
                </Fab>
            </Container>
        );
    }
}

export default withNavigation(BaseSuperFAB);