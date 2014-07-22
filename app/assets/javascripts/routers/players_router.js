Hydra.Routers.Players = Backbone.Router.extend({
  routes: {
    'players': 'index',
    'players/:id': 'show'
  },

  index: function() {
    console.log("You are in 'Index");
  },

  show: function(id) {
    window.player = new Hydra.Models.Player({id: id});
    player.fetch();
    React.renderComponent(
      Hydra.React.PlayerCard({player: player}),
      document.getElementById('card-container')
    );
  }

});
