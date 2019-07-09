import { connect } from 'react-redux';
import SignupForm from './signup';
import { signup, login, clearSessionErrors } from '../actions/session_actions';
import { openLoginModal, closeModal, openSignupModal } from '../actions/ui_actions';


const mapStateToProps = state => ({
  type: state.ui.modal,
  errors: state.ui.errors.session
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  openLoginModal: () => dispatch(openLoginModal()),
  openSignupModal: () => dispatch(openSignupModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);