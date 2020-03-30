import React from 'react';
import SignupContainer from '../session/session_container';
import ChannelFormContainer from '../../components/chat/channelForm';
import UserSearchForm from '../../components/utils/userSearch';


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
        if (this.props.modalType === "login") modalContent = <SignupContainer />;
        if (this.props.modalType === "channel") modalContent = <ChannelFormContainer workspaceId={parseInt(this.props.modalData)}/>;
        if (this.props.modalType === "workspace") modalContent = <p>Workspace Create Form</p>;
        if (this.props.modalType === "addChannelUser") modalContent = <UserSearchForm />;

        return (
            <div className="modal-container">
                <div className="modal-background" onClick={this.closeModal}></div>
                <div className="modal">
                    {modalContent}
                </div>
            </div>
        )
    }
}

export default Modal;