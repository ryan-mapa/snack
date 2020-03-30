class Api::ChannelsController < ApplicationController
    def index
        @channels = current_user.channels
    end 

    def create
        @channel = Channel.new(channel_params)
        @channel.creator_id = current_user.id

        if @channel.save
            render :show
        else    
            render json: @channel.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @channel = Channel.find(params[:id])

        if @channel
            @channel.destroy
            render :show
        end 
    end 

    private
    
    def channel_params
        params.require(:channel)
            .permit(:name, :is_dm, :is_private, :description, :workspace_id)
    end 
end 