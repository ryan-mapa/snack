import * as workspaceUtils from './../util/workspace_api_util';

export const RECEIVE_WORKSPACES = "RECEIVE_WORKSPACES";

const receiveWorkspaces = payload => ({
    type: RECEIVE_WORKSPACES,
    payload
})

export const fetchWorkspaces = userId => dispatch => {
    return workspaceUtils.getWorkspaces(userId).then(
        workspaces => dispatch(receiveWorkspaces(workspaces)))
}
