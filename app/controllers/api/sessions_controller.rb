class Api::SessionsController < ApplicationController

  def create
    @user = user.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(user)
      render json: @user
    else
      render json: ['ya messed up'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

end
