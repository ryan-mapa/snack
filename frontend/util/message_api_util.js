export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: '/api/messages',
        data: {message}
    })
)

export const getChannelMessages = (channelId) => (
    $.ajax({
        method: 'GET',
        url: `/api/messages`
        // url: `/api/${channelId}/messages`
    })
)