import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-glamor-react';

import Button from './';

expect.addSnapshotSerializer(serializer);

describe('button', () => {
  it('renders Button', () => {
    const button = renderer
      .create(<Button style={{ color: 'red' }} />)
      .toJSON();
    expect(button).toMatchSnapshot();
  });
});
