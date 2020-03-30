json.channels do 
    json.set! @channel.id do
        json.extract! @channel, :id, :name, :creator_id, :is_dm, :is_private, :updated_at, :workspace_id
    end 
end

json.messages do 
    @channel.messages.each do |message|
        json.set! message.id do
            json.extract! message, :id, :body, :author_id, :channel_id, :updated_at
        end 
    end 
end
