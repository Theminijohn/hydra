Hydra.Collections.Players = Backbone.Collection.extend({

  model: Hydra.Models.Player,
  url: '/api/v1/players' // Specifying the fetch from the API (route)

});


// Collections.fetch() retrieves a set of models from the server in the form of a
// JSON array by sending an HTTP GET request to the URL specified by the collection’s
// url property (which may be a function). When this data is received, a set()
// will be executed to update the collection.
var players = new Hydra.Collections.Players();
players.fetch();
