Rails.application.routes.draw do
  # namespace :api do
  #   get 'users/new'
  #   get 'users/edit'
  #   get 'users/update'
  #   get 'users/create'
  #   get 'users/destroy'
  #   get 'users/show'
  #   get 'users/index'
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users 
    resources :messages, only: [:create, :index]
    resource :session, only: [:new, :create, :destroy]
  end

  # mount ActionCable.server, at: '/cable'
  mount ActionCable.server => "/cable"
end
