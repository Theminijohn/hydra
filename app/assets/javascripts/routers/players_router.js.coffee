class Hydra.Routers.Players extends Backbone.Router
  routes:
    '': 'index'
    'players/:id': 'show'

  index: ->
    view = new Hydra.Views.PlayersIndex()
    $('#container').html(view.render().el)

  show: (id) ->
    alert "Showing Player with id #{id}"
