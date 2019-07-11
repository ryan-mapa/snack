json.workspaces do
    json.set! @workspace.id do
        json.extract! @workspace, :id, :name
    end 
end 

json.channels do 
    @workspace.channels.each do |channel|
        json.set! channel.id do
            json.extract! channel, :id, :name, :creator_id, :description, :workspace_id
        end 
    end 
end 