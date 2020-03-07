import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  }
};

export const logoutUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
};

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)))
}

export const login = user => dispatch => {
  return APIUtil.login(user)
      .then((user) => dispatch(receiveCurrentUser(user)))
      .fail((err) => dispatch(receiveErrors(err.responseJSON)))
}

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(() => dispatch(logoutUser()))
}
