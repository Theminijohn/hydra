/** @jsx React.DOM */

// When you name your file with myfile.js.jsx, react-rails will automatically try
// to transform that file. For the time being, we still require that you include the
// docblock at the beginning of the file. For example, this file will get transformed
// on request.


var InterfaceComponent = React.createClass({

  getDefaultProps : function() {
    return {
      "name" : "default name"
    };
  },

  render: function(){
    return <div>Hello {this.props.name}! </div>
  }
});

React.renderComponent(
  <InterfaceComponent name="John" />,
  document.getElementById('react-container')
);