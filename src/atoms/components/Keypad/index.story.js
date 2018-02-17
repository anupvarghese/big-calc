import React from 'react';

import { storiesOf } from '@storybook/react';
import Keypad from './';

storiesOf('Keypad').add('show keypad', () => (
  <Keypad keypadStyle={{ width: '400px' }} handleKeyClick={() => () => {}} />
));
