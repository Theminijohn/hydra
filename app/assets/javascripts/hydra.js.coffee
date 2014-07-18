window.Hydra =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: ->
    new Hydra.Routers.Players()
    Backbone.history.start()

$(document).ready ->
  Hydra.initialize()
