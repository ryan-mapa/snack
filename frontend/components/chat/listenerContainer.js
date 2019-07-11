import { connect } from 'react-redux';
import Listener from './listener';
import { receiveMessage } from '../../actions/message_actions'
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {   
        channelId: ownProps.match.params.channelId || null
    }
}

const mdp = (dispatch) => ({
    receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(msp, mdp)(Listener);
