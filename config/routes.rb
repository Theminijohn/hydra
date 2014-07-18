Rails.application.routes.draw do
  resources :players

  root 'main#index'
end
