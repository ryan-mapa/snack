import React from 'react';
import { openModal, updateModalData } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const msp = (state) => ({})

const mdp = (dispatch) => ({
    openModal: (type) => dispatch(openModal(type)),
    // updateModalData: (data) => dispatch(updateModalData(data))
})

class NewItemButton extends React.Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        console.log(`Make a new ${this.props.type}!!!`);
        this.props.openModal(this.props.type);
        // this.props.updateModalData(this.props.data);
    }

    render() {
        return (
            <span onClick={this.handlePress} className='add-button'> + </span>
        )
    }
}

export default connect(msp, mdp)(NewItemButton);