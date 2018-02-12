import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-glamor-react';

import Display from './';

expect.addSnapshotSerializer(serializer);

describe('Display', () => {
  it('renders Display', () => {
    const display = renderer.create(<Display />).toJSON();
    expect(display).toMatchSnapshot();
  });
});
