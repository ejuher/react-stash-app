Rails.application.routes.draw do
  root 'home#index'
  
  namespace :api do
    namespace :v1 do
      get 'links/index'
      post 'links/create'
      patch 'links/update'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
