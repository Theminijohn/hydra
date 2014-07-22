window.Hydra = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  React: {},
  initialize: function() {
    new Hydra.Routers.Players();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  Hydra.initialize();
});
