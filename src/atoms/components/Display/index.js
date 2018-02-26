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
          fontSize: '1.3rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
        type="text"
        disabled
        value={value}
      />
    </div>
  );
};

export default Display;
