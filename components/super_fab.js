import React from 'react';
import { Container, Fab, Icon } from 'native-base';
import {withNavigation} from 'react-navigation';

class BaseSuperFAB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    renderFABs() {
        let fabs = [];
        this.props.fabs.map ( (fab, index) => {
            fabs.push(
                <Fab
                key = {index}
                style={{ backgroundColor: fab.backgroundColor }}
                onPress={fab.func}
                >
                    <Icon name={fab.icon} />
                </Fab>
            );
        });
        return fabs;
    }

    render() {
        return (
                <Fab
                active={this.state.active}
                direction='up'
                position='bottomRight'
                onPress={() => this.setState( prevState => {return {active: !prevState.active};})}
                style={{ backgroundColor: '#5067FF'}}>
                    <Icon name="ios-paper-plane" />
                    {this.renderFABs()}
                </Fab>
        );
    }
}

export default withNavigation(BaseSuperFAB);