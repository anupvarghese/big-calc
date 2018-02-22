import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-glamor-react';

import Keypad from './';

expect.addSnapshotSerializer(serializer);

describe('Keypad', () => {
  it('renders Keypad', () => {
    const keypad = renderer
      .create(
        <Keypad handleNumberClick={() => {}} handleOperatorClick={() => {}} />,
      )
      .toJSON();
    expect(keypad).toMatchSnapshot();
  });
});
