import * as MESSAGE_UTILS from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessages = (payload) => ({
    type: RECEIVE_MESSAGES,
    payload
})

export const receiveMessage = (payload) => ({
    type: RECEIVE_MESSAGE,
    payload
})

export const createMessage = (message) => dispatch => (
    MESSAGE_UTILS.createMessage(message)
)

export const getRoomMessages = (channelId) => dispatch => (
    MESSAGE_UTILS.getChannelMessages(channelId).then(payload => dispatch(receiveMessages(payload)))
)