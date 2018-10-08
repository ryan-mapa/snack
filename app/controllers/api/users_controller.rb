class Api::UsersController < ApplicationController
  def new
  end

  def edit
  end

  def update
  end

  def create
  end

  def destroy
  end

  def show
    @user = User.find(params[:id])
    
  end

  def index
  end
end
