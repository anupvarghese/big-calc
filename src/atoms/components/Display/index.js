// @flow

import React from 'react';
import { css } from 'glamor';
import Input from '../../input';
import C from '../../../constants';

type displayT = {
  value: number,
};

const Display = ({ value }: displayT) => {
  return (
    <div {...css({ display: 'flex', flexDirection: 'row' })}>
      <Input
        baseStyle={{
          minHeight: '5rem',
          flexBasis: '100%',
          background: C.BLACK,
          borderColor: `${C.BLACK}`,
          fontSize: '1.8rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          textAlign: 'right',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          color: 'white',
        }}
        type="text"
        disabled
        value={value}
      />
    </div>
  );
};

export default Display;
