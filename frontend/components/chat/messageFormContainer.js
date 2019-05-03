import { createMessage } from '../../actions/message_actions';
import { connect } from 'react-redux';
import messageForm from './messageform';

const mdp = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
})

export default connect(null, mdp)(messageForm);