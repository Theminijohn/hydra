Hydra.Models.Player = Backbone.Model.extend({

  // The Defaults for that Model
  defaults: {
    name: 'Johnnie Walker',
    gender: 'M',
    picture: 'http://placekitten.com/200/200'
  }

});




// Pass the Profile Model Instace to the PlayerCard Component class.
// Then, inside the render() method, we use the same getters to populate a few simple components.
var profile = new Hydra.Models.Player({
  name    : "Christopher Pitt",
  gender  : "male",
  picture : "http://placekitten.com/200/200"
});

console.log(
  "name    : " + profile.get("name") + "\n" +
  "gender  : " + profile.get("gender") + "\n" +
  "picture : " + profile.get("picture")
);

