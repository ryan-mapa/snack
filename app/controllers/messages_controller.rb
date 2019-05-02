class MessagesController < ApplicationController

    def create
        @message = Message.new(message_params)

        if @message.save
            ActionCable
                .server
                # .broadcast("room-#{@message.channel_id}:messages",
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
        
    end 

    private

    def message_params
        params.require(:message).permit(:body, :channel_id)
    end
end
