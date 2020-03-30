import { postChannel } from '../util/channel_api_util';

export const RECEIVE_USER_CHANNELS = "RECEIVE_USER_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannel = (payload) => ({
    type: RECEIVE_CHANNEL,
    payload
})

export const createChannel = (channel) => dispatch => {
    return postChannel(channel).then((payload) => dispatch(receiveChannel(payload)))
}