export const getWorkspaces = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/workspaces`,
    });
};