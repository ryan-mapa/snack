Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  get 'api/search', to: 'api/users#search'
  
  namespace :api, defaults: { format: :json } do

    resources :users do
      resources :workspaces, only: [:index]
    end 
    resources :messages, only: [:create, :index]
    resources :channels, only: [:index, :create, :destroy]
    resources :workspaces, only: [:show] 
    resource :session, only: [:new, :create, :destroy]
  end


  # mount ActionCable.server, at: '/cable'
  mount ActionCable.server => "/cable"
end
