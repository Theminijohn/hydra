class ApiController < ActionController::Metal

include ActionController::Helpers
include ActionController::Redirecting
include ActionController::Rendering
include ActionController::Renderers::All
include ActionController::ConditionalGet

# need this for responding to different types .json, .xml etc
include ActionController::MimeResponds
include ActionController::RequestForgeryProtection

# need this if you are using SSL
include ActionController::ForceSSL
include AbstractController::Callbacks

# need this to build params
include ActionController::Instrumentation

# need this for wrap_parameters
include ActionController::ParamsWrapper
# include Devise::Controllers::Helpers

# need to make your ApiController aware of your routes
include Rails.application.routes.url_helpers

# Tell the controller where to look for templates
append_view_path "#{Rails.rot}/app/views"

# you need this to wrap the parameters correctly. E.g.:
# { 'person': { 'name': 'Zack', email: 'the@minijohn.me', twitter: '@theminijohn'}}
wrap_parameters format: [:json]


protect_from_forgery

end