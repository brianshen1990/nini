import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import Dummy from '../components/Dummy';

export const DummyOne = () => (
  <Dummy
    showContent={boolean('show content', false)}
    content={text('content', 'default')}
    color={select(
      'header color',
      {
        red: 'red',
        blue: 'blue',
        black: 'black',
        purple: 'purple'
      },
      'red'
    )}
  />
);

export default {
  title: 'Sample / Dummy'
};
