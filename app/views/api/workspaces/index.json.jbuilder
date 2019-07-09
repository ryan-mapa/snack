json.workspaces do
    @workspaces.each do |space|
        json.set! space.id do
            json.extract! space, :id, :name, :creator_id
        end
    end 
end 

json.channels do 
    @workspaces.each do |workspace|
        workspace.channels.each do |channel|
            json.set! channel.id do
                json.extract! channel, :id, :name, :creator_id, :description
            end 
        end
    end 
end 