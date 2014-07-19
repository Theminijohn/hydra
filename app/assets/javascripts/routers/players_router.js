Hydra.Routers.Players = Backbone.Router.extend({
  routes: {
    'players': 'index',
    'players/:id': 'show'
  },

  index: function() {
    console.log("You are in 'Index")
  },

  show: function() {
    console.log("You are in 'Show'")
  }

});
