export const LOGIN_MODAL = 'LOGIN_MODAL';
export const SIGNUP_MODAL = 'SIGNUP_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_CHAT_WIDGET = 'OPEN_CHAT_WIDGET';
export const CLOSE_CHAT_WIDGET = 'CLOSE_CHAT_WIDGET';


export const openSignupModal = () => ({
    type: SIGNUP_MODAL
})

export const openLoginModal = () => ({
    type: LOGIN_MODAL
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})

export const openChatWidget = () => ({
    type: OPEN_CHAT_WIDGET
})

export const closeChatWidget = () => ({
    type: CLOSE_CHAT_WIDGET
})