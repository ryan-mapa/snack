class Api::WorkspacesController < ApplicationController

    def index
        @workspaces = current_user.workspaces
    end 

    def show
        @workspace = Workspace.find(params[:id])
    end 
end
