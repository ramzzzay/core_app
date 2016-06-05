var React = require('react');
import 'whatwg-fetch';

var Info = React.createClass({
  getInitialState: function() {
    return {
      solve: 0
    };
  },
  upload: function(e) {
    e.preventDefault();
    var self = this;
    fetch(`${this.props.url}?first=${this.refs.one.value}&second=${this.refs.two.value}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(r=> r.json()).then(d=>self.setState({solve:d}));

},
  render: function() {
    return (
      <div>
        <form onSubmit={this.upload}>
          <input type="number" ref="one"></input>
          +
          <input type="number" ref="two"></input>
          =
          <input type="number" ref="solve" value={this.state.solve}></input>
          <br/>
          <input type="submit" value="OK"></input>
        </form>
      </div>
    );
  }

});

module.exports = Info;
