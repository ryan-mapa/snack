json.set! @user.id do
    json.extract! @user, :id, :username, :email, :display_name, :bio
end 
