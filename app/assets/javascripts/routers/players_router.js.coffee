class Hydra.Routers.Players extends Backbone.Router
  routes:
    '': 'index'
    'players/:id': 'show'

  index: ->
    console.log "Players Index View"

  show: (id) ->
    alert "Showing Player with id #{id}"
