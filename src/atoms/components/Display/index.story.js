import React from 'react';

import { storiesOf } from '@storybook/react';

import Display from './';

storiesOf('Display').add('show display', () => <Display value={1234} />);
