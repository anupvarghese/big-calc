import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'glamor';

class Hello extends React.Component {
  render() {
    const style = {
      color: 'green',
      fontSize: '5rem',
      fontFamily: 'lato',
    };

    return (
      <div>
        <div {...css(style)}>Hello {this.props.name}</div>
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

ReactDOM.render(<Hello name="There" />, document.getElementById('app'));
