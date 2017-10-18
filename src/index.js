import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

ReactDOM.render(<Hello name="John" />, document.getElementById('app'));
