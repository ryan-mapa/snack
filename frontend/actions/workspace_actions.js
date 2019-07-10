import * as workspaceUtils from './../util/workspace_api_util';

export const RECEIVE_WORKSPACES = "RECEIVE_WORKSPACES";
export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";

const receiveWorkspaces = payload => ({
    type: RECEIVE_WORKSPACES,
    payload
})

const receiveWorkspace = payload => ({
    type: RECEIVE_WORKSPACE,
    payload
})

export const fetchWorkspaces = userId => dispatch => {
    return workspaceUtils.getWorkspaces(userId).then(
        workspaces => dispatch(receiveWorkspaces(workspaces)))
}

export const fetchWorkspace = id => dispatch => {
    return workspaceUtils.getWorkspace(id).then(
        workspaces => dispatch(receiveWorkspace(workspaces)))
}
