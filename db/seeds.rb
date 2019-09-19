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
ryan = User.create!({username: 'ryan', password: pw, display_name: 'Guest', email: 'ryan@email.com', bio: 'i eat da fuds.'})
vanessa = User.create!({username: 'vanessa', password: pw, display_name: 'Vanessa', email: 'vanessa@email.com', bio: 'Vanessa is my name'})

#workspaces
w1 = Workspace.create!({creator_id: ryan.id, name: 'first space'})
w2 = Workspace.create!({creator_id: ryan.id, name: 'second space'})

#channels
chat1 = Channel.create!({name: 'chat1', creator_id: ryan.id, workspace_id: w1.id,description: 'Default chat'})
chat2 = Channel.create!({name: 'chat2', creator_id: ryan.id, workspace_id: w1.id,description: 'non default'})
chat3 = Channel.create!({name: 'chat3', creator_id: ryan.id, workspace_id: w2.id,description: 'woot!'})
chat4 = Channel.create!({name: 'chat4', creator_id: vanessa.id, workspace_id: w2.id,description: 'booooot.'})
chat5 = Channel.create!({name: 'chat5', creator_id: vanessa.id, workspace_id: w2.id,description: 'dooot'})

#channel users
ChannelUser.create!({channel_id: chat1.id, user_id: ryan.id})
ChannelUser.create!({channel_id: chat1.id, user_id: vanessa.id})
ChannelUser.create!({channel_id: chat2.id, user_id: ryan.id})
ChannelUser.create!({channel_id: chat2.id, user_id: vanessa.id})




