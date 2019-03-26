import { connect } from 'react-redux';
import SignupForm from './signup';
import { signup, login, clearSessionErrors } from '../actions/session_actions';
import { closeModal } from '../actions/ui_actions';

const mapStateToProps = state => ({
  type: state.ui.modal,
  errors: state.ui.errors.session
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);