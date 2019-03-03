import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.currentUser]
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Nav);