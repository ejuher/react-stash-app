Rails.application.routes.draw do
  root 'beers#index'
  
  namespace :api do
    namespace :v1 do
      get 'beers/index'
      post 'beers/create'
      delete 'beers/:id', to: 'beers#destroy'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
