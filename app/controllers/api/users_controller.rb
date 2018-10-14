class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
      if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def index
  end

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
