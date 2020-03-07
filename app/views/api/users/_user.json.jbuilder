json.users do 
    json.set! user.id do
        json.extract! user, :id, :username, :email, :display_name, :bio
    end 
end

json.channel_users do
    user.channel_users.each do |channel_user|
        json.set! channel_user.id do
            json.extract! channel_user, :id, :user_id, :channel_id
        end 
    end 
end