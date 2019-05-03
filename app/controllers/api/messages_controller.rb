class Api::MessagesController < ApplicationController

    def create
        # @message = Message.new(message_params)
        @message = Message.new(message_params)
        @message.channel_id = 1
        @message.author_id = 1
        
        if @message.save
            ActionCable
                .server
                .broadcast("room-#{@message.channel_id}:messages",
                        message: {
                            id: @message.id,
                            body: @message.body,
                            authorId: @message.author_id,
                            channelId: @message.channel_id,
                            createdAt: @message.created_at,
                        },
                        user: {
                            id: current_user.id,
                            username: current_user.username,
                        })
        else
            render json: @message.errors.full_messages, status: 422
        end
    end 

    def index
        p "BOOOMBAYAAAAAAHH"
        @messages = Channel.find(1).messages
        render "api/messages/index"
    end 

    private

    def message_params
        params.require(:message).permit(:body)
    end
end
