class PlayersController < ApplicationController

  respond_to :json

  def index
    respond_with Player.all
  end

  def show
    respond_with Player.find(params[:id])
  end

  def create
    respond_with Player.create(params[:entry])
  end

  def update
    respond_with Player.update(params[:id], params[:entry])
  end

  def destroy
    respond_with Player.destroy(params[:id])
  end

end
