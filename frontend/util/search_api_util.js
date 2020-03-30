export const searchUsers = (query, workspace_id) => (
    $.ajax({
        method: 'GET',
        url: '/api/search',
        data: {query, workspace_id}
    })
)