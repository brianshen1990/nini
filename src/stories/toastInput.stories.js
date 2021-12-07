import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import ToastInput from '../components/ToastInput';

export const ToastInputExample = () => (
  <ToastInput
    onAdd={(value) => alert(`you clicked show toast, and the value is ${value}`)}
  />
);

export default {
  title: 'Sample / ToastInputExample'
};
