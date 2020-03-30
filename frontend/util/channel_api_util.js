export const postChannel = (channel) => {
    return $.ajax({
        method: 'POST',
        url: '/api/channels',
        data: {channel}
    })
}