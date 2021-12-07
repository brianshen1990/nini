import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import ToastItem from '../components/ToastItem';

export const ToastItemExample = () => (
  <ToastItem
    content="toast sample"
    id="1234"
    onDelete={id => alert(`you clicked delete button, and the value is ${id}`)}
  />
);

export default {
  title: 'Sample / ToastItemExample'
};
