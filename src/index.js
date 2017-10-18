import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const wrapper = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '10px',
  fontSize: '40px',
  gridAutoRows: '390px',
  gridTemplateAreas: `". a a ."
  ". a a ."`,
});

const item = css({
  gridArea: 'a',
  alignSelf: 'center',
  justifySelf: 'center',
});

class Hello extends React.Component {
  render() {
    return (
      <div {...wrapper}>
        <div {...item}>Hello {this.props.name}</div>
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

ReactDOM.render(<Hello name="John" />, document.getElementById('app'));
