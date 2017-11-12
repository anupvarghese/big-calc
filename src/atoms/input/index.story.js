import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './';

storiesOf('Input')
  .add('with text', () => (
    <Input onChange={action('onchange')} style={{ color: 'red' }}>
      Hello Input
    </Input>
  ))
  .add('with some emoji', () => (
    <Input onChange={action('onchange')}>😀 😎 👍 💯</Input>
  ));
