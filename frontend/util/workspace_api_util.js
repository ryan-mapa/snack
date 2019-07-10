export const getWorkspaces = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/workspaces`,
    });
};

export const getWorkspace = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/workspaces/${id}`,
    });
};