import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const msp = (state) => ({})

const mdp = (dispatch) => ({
    openModal: (type) => dispatch(openModal(type))
})

class NewItemButton extends React.Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        console.log(`Make a new ${this.props.type}!!!`);
        this.props.openModal(this.props.type);
    }

    render() {
        return (
            <span onClick={this.handlePress} className='add-button'> + </span>
        )
    }
}

export default connect(msp, mdp)(NewItemButton);