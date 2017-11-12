import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Button from './atoms/button';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const style = {
      color: 'green',
      fontSize: '2rem',
      fontFamily: 'lato',
      margin: '1rem 0 0 1rem',
    };

    const buttonStyle = {
      color: 'tomato',
      fontSize: '1rem',
      fontFamily: 'lato',
      margin: '1rem',
    };

    return (
      <div>
        <div {...css(style)}>
          Hello {this.props.name} You clicked here {this.state.count} times!
        </div>
        <Button onClick={this.handleClick} style={css(buttonStyle)}>
          Click Me
        </Button>
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

ReactDOM.render(<Hello name="There" />, document.getElementById('app'));
