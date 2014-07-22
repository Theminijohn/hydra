Hydra.Models.Player = Backbone.Model.extend({

  // The Defaults for that Model
  defaults: {
    grepo_id: '',
    name: '',
    alliance_id: '',
    points: '',
    ranke: '',
    town_count: ''
  },

  urlRoot: '/api/v1/players/'
});


// Pass the Profile Model Instace to the PlayerCard Component class.
// Then, inside the render() method, we use the same getters to populate a few simple components.
/*
var player = new Hydra.Models.Player({id: this.id});
player.fetch()

console.log(
  "name    : " + player.get("name") + "\n" +
  "grepo_id  : " + player.get("grepo_") + "\n" +
  "points : " + player.get("picture")
);
*/
