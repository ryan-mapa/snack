@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :name, :creator_id, :is_dm, :is_private, :updated_at
    end 
end 
