import { connect } from 'react-redux';
import SignupForm from './signup';

import { signup } from '../actions/session_actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))  
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);