/** @jsx React.DOM */

  var InterfaceComponent = React.createClass({

    // This method (State) tells the component which values should be available from the
    // first render cycle, until the state values are changed. You should never
    // try to use state values without first declaring them in this manner.
    getInitialState: function() {
      return {
        name: 'Chris',
        job: 'developer'
      }
    },

    // Setting || Updating a State
    // Setting state should only be done from inside the component.
    // As mentioned, state should be treated as private data.
    handleClick: function() {
      this.setState({
        name: 'John',
        job: 'Construction Worker'
      })
    },

    render: function(){
      return <div onClick={this.handleClick}>
        Hello, my name is  <b>{this.state.name}</b> and i work as a <b>{this.state.job}</b>!
      </div>
    }
  });

React.renderComponent(
  <InterfaceComponent/>,
  document.getElementById('player-container')
);



//  Player Card Component
var PlayerCard = React.createClass({
        componentWillMount : function() {
          profile.on("change", (function() {
            this.forceUpdate();
          }.bind(this)));
        },
        componentWillUnmount : function() {
          profile.off("change");
        },
        render : function() {
          return (
            <div className="card">
              <div className="picture">
                <img src={this.props.profile.get("picture")} />
              </div>
              <div className="name">
                {this.props.profile.get("name")}
                <small>
                  ({this.props.profile.get("gender")})
                </small>
              </div>
            </div>
          );
        }
      });

      var connect = document.querySelector(".connect");
      var target  = document.querySelector(".target");
      var profile = new Hydra.Models.Player();

      var fetchProfile = function() {
        React.renderComponent(
          <CardComponent profile={profile} />,
          target
        );

        FB.api("/me", "get", {}, function(result) {
          profile.set("name", result.name);
          profile.set("gender", result.gender);
        });

        var params = "?redirect=false&width=200&height=200";

        FB.api(
          "/me/picture" + params,
          "get",
          {},
          function(result) {
            profile.set("picture", result.data.url);
          }
        );
      };

      var login = function() {
        FB.login(function() {
          fetchProfile();
        });
      };

      window.fbAsyncInit = function() {

        FB.init({
          appId  : "1648014082089587",
          status : true,
          xfbml  : true
        });

        connect.addEventListener("click", function() {
          login();
        });

        FB.Event.subscribe(
          "auth.authResponseChange",
          function(response) {
            if (response.status === "connected") {
              fetchProfile();
            }
          }
        );

      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, "script", "facebook-jssdk"));

React.renderComponent(
  <PlayerCard profile={profile}/>,
  document.getElementById('card-container')
);
