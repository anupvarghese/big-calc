import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-glamor-react';

import Calculator from './';

expect.addSnapshotSerializer(serializer);

describe('Calculator', () => {
  it('renders Calculator', () => {
    const calculator = renderer.create(<Calculator />).toJSON();
    expect(calculator).toMatchSnapshot();
  });
});
