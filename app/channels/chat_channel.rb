class ChatChannel < ApplicationCable::Channel
  # def subscribed
  #   # stream_from "some_channel"
  #   stream_for 'chat_channel'
  #   stream_from ''
  # end

  # def subscribed
  #   # stream_from "messages_channel"
  #   stream_from "room-#{params["room"]}:messages"
  # end

  # def unsubscribed
  #   # Any cleanup needed when channel is unsubscribed
  # end

  # def load
  #   messages = Message.all.collect(&:body)
  #   socket = { messages: messages, type: 'messages' }
  #   ChatChannel.broadcast_to('chat_channel', socket)
  # end 
  
end
