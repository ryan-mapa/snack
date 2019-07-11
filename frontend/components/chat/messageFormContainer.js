import { createMessage } from '../../actions/message_actions';
import { connect } from 'react-redux';
import messageForm from './messageform';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    channelId: ownProps.match.params.channelId
})

const mdp = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
})

export default withRouter(connect(msp, mdp)(messageForm));