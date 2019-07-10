json.workspaces do
    json.set! @workspace.id do
        json.extract! @workspace, :id, :name
    end 
end 