export const LOGIN_MODAL = 'LOGIN_MODAL';
export const SIGNUP_MODAL = 'SIGNUP_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openSignupModal = () => ({
    type: SIGNUP_MODAL
})

export const openLoginModal = () => ({
    type: LOGIN_MODAL
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})

