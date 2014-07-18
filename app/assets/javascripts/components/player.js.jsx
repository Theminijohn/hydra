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
        name: 'John'
      })
    },

    render: function(){
      return <div onClick={this.handleClick}>
        Hello, my name is  <b>{this.state.name}</b> and i work as a <b>{this.state.job}</b>!
      </div>
    }
  });

  React.renderComponent(
    <InterfaceComponent />,
    document.getElementById('player-container')
  );