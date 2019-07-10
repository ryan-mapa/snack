import { connect } from 'react-redux';
import Chatroom from './chatroom';
import { getRoomMessages } from '../../actions/message_actions';

const msp = (state, ownProps) => ({
    channelId: ownProps.match.params.channelId,
    messages: Object.values(state.entities.messages),
    currentUser: state.entities.users[state.session.currentUser] || "SmileyFace"
})

const mdp = (dispatch) => ({
    getMessages: channelId => dispatch(getRoomMessages(channelId))
})

export default connect(msp, mdp)(Chatroom);