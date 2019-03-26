import React from 'react';
import SignupContainer from '../../components/signup_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.closeModal();
    }

    render() {
        if (this.props.modalType === "") return null;
        let modalContent;
        if (this.props.modalType === "signup") modalContent = <SignupContainer />;
        return (
            <div className="modal-container">
                <div className="modal-background" onClick={this.closeModal}></div>
                <div className="modal">
                    <SignupContainer />
                </div>
            </div>
        )
    }
}

export default Modal;