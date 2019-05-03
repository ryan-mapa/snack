import * as MESSAGE_UTILS from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})

export const createMessage = (message) => dispatch => (
    MESSAGE_UTILS.createMessage(message)
)

export const getRoomMessages = (channelId) => dispatch => (
    MESSAGE_UTILS.getChannelMessages(channelId).then(messages => dispatch(receiveMessages(messages)))
)