source 'https://rubygems.org'

# Versions
ruby '2.1.2'
gem 'rails', '4.1.1'

# Standards""
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

# Importing
gem 'smarter_csv', '~> 1.0.17'
gem 'ruby-progressbar', '~> 1.5.1'

# Backbone
gem 'backbone-on-rails'

group :development, :test do
  gem 'spring'
  gem 'sqlite3'
  gem 'quiet_assets'
  gem 'letter_opener'
  gem 'bullet'
  gem 'guard-livereload', require: false
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'rspec-rails', '~> 2.14.1'
  gem 'spork-rails'
end

group :test do
  gem 'factory_girl_rails', '~> 4.4.1'
  gem 'faker', '~> 1.3.0'
  gem 'capybara', '~> 2.3.0'
  gem 'cucumber-rails', :require => false
  gem 'database_cleaner', '~> 1.3.0'
  gem 'launchy', '~> 2.4.2'
  gem 'selenium-webdriver', '~> 2.42.0'
  gem 'shoulda-matchers', require: false
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end