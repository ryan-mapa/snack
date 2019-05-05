import {connect} from 'react-redux';
import Listener from './listener';
import {receiveMessage} from '../../actions/message_actions'

const msp = (state) => ({

})

const mdp = (dispatch) => ({
    receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(null, mdp)(Listener);
