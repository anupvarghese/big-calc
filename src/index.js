import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<Hello name="John" />, document.getElementById('app'));
