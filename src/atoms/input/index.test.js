// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-glamor-react';

import Input from './';

expect.addSnapshotSerializer(serializer);

describe('input', () => {
  it('renders Input', () => {
    const button = renderer
      .create(
        <Input style={{ color: 'red' }} onChange={() => {}} value="Hello" />,
      )
      .toJSON();
    expect(button).toMatchSnapshot();
  });
});
