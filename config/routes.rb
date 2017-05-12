Rails.application.routes.draw do
  resources :breweries
  resources :locations
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'breweries#index' 
end
