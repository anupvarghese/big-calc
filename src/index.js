import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'glamor';
import Numbers from './components/Numbers';

class BigCalc extends React.Component {
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
      display: 'grid',
      gridTemplateColumns: '100px 100px 100px',
      gridTemplateRows: '100px 100px 100px 100px 100px',
      gridGap: '10px',
      justifyContent: 'center',
      alignContent: 'center',
    };

    return (
      <div>
        <div {...css(style)}>
          <Numbers />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BigCalc name="There" />, document.getElementById('app'));
