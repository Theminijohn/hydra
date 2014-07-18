class Hydra.Views.PlayersIndex extends Backbone.View

  template: JST['players/index']

  render: ->
    $(@el).html(@template(players: "Players go here"))
    this
