Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :create]
  end

  root 'static_pages#root'
end
