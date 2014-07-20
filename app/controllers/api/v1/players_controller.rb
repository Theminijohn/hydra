module Api
  module V1
    class PlayersController < ApplicationController
      respond_to :json

      def index
        respond_with Player.all
      end

      def show
        respond_with Player.find(params[:id])
      end

    end
  end
end