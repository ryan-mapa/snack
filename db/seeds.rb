# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# wrap in transaction later


#  username        :string           not null
#  display_name    :string
#  email           :string           not null
#  bio             :text


#  name        :string
#  creator_id  :integer          not null
#  is_dm       :boolean          default(FALSE), not null
#  is_private  :boolean          default(FALSE), not null
#  description :text

#  channel_id :integer          not null
#  user_id    :integer          not null

User.destroy_all
Workspace.destroy_all
Channel.destroy_all
Message.destroy_all

# users
pw = '123456'
ryan = User.new({username: 'ryan', password: pw, display_name: 'Guest', email: 'ryan@email.com', bio: 'i eat da fuds.'})
vanessa = User.new({username: 'vanessa', password: pw, display_name: 'Vanessa', email: 'vanessa@email.com', bio: 'Vanessa is my name'})

ryan.save!

#workspaces
debugger
w1 = Workspace.new({creator_id: ryan.id, name: 'firstspace'})
w1.save!

#channels
main_chat = Channel.new({name: 'Main Chat', creator_id: ryan.id, workspace_id: w1.id,description: 'Default chat'})
main_chat.save!

#channel users
ChannelUser.create!({channel_id: main_chat.id, user_id: ryan.id})




