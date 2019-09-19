import React from 'react';
import { connect } from 'react-redux';
import { openChatWidget, closeChatWidget } from '../../../actions/ui_actions'

class chatWidget extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e) {
        e.preventDefault();

        if (this.props.open) {
            this.props.closeChatWidget();
        } else {
            this.props.openChatWidget();
        }
    }

    render() {
        return (
            <div className='chat-widget-box'>
                wheee
                <button onClick={this.handleToggle}>
                    {this.props.open ? "CLOSE" : "OPEN"}
                </button>
            </div>
        )
    }
}

const msp = state => ({
    open: state.ui.widget.open
});

const mdp = dispatch => ({
    openChatWidget: () => dispatch(openChatWidget()),
    closeChatWidget: () => dispatch(closeChatWidget())
});

export default connect(msp, mdp)(chatWidget);