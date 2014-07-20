Rails.application.routes.draw do

  # API
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :players
    end
  end

  # //
  root 'main#index'

  # Resources
  resources :players
end
