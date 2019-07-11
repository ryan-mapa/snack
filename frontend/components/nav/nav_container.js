import { connect } from 'react-redux';
import Nav from './nav';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import { openLoginModal, openSignupModal } from '../../actions/ui_actions';
import  {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    }   
}

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    openLoginModal: () => {
        dispatch(clearSessionErrors());
        return dispatch(openLoginModal());
    }, 
    openSignupModal: () => {
        dispatch(clearSessionErrors());
        return dispatch(openSignupModal())
    }
})

export default withRouter(connect(msp, mdp)(Nav));