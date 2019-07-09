json.messages do
    @messages.each do |message|
        json.set! message.id do 
            json.extract! message, :id, :body, :author_id, :channel_id, :created_at, :updated_at
        end 
    end 
end 

json.users do
    @messages.each do |message|
        json.set! message.author_id do 
            json.extract! message.author, :id, :username
        end 
    end
end 