import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => dispatch(logoutUser()));
}

export const login = user => dispatch => {
  return (
    APIUtil.login(user).then(
      (user) => dispatch(receiveCurrentUser(user))
    )
  );
};
