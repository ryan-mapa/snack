class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
    stream_from ''
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    message = Message.new(body: data['message'])

    # HARD CODING!!!
    message.author_id = 1
    message.channel_id = 1
  
    if message.save
      socket = { message: message.body, type: "message" }
      ChatChannel.broadcast_to('chat_channel', socket)
    end 
  end

  def load
    messages = Message.all.collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end 
  
end
