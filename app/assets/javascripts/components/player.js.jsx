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

    render: function(){
      return <div>
        Hello, my name is  <b>{this.state.name}</b> and i work as a <b>{this.state.job}</b>!
      </div>
    }
  });

  React.renderComponent(
    <InterfaceComponent />,
    document.getElementById('player-container')
  );