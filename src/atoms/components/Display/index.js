// @flow

import React from 'react';
import { css } from 'glamor';
import Input from '../../input';

type displayT = {
  value: number,
};

const Display = ({ value }: displayT) => {
  return (
    <div {...css({ display: 'flex', flexDirection: 'row' })}>
      <Input
        baseStyle={{
          minHeight: '4rem',
          flexBasis: '100%',
          borderRadius: '4px',
          border: '1px solid tomato',
          fontSize: '1.5rem',
          ':focus': {
            outline: 'none !important',
            border: '1px solid blue',
            boxShadow: '0 0 10px #719ECE',
            borderRadius: '4px',
          },
        }}
        type="text"
        disabled
        value={value}
      />
    </div>
  );
};

export default Display;
