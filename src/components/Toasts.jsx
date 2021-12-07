import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ToastInput from './ToastInput';
import ToastItem from './ToastItem';

const useStyles = () => ({
  toastContainer: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

export default function Toasts({}) {
  const { toastContainer } = useStyles();
  const [toasts, setToasts] = useState([]);

  return (
    <div>
      <div>
        <ToastInput
          onAdd={(value) => {
            setToasts([...toasts, { content: value, id: uuidv4() }]);
          }}
        />
      </div>
      <div css={toastContainer}>
        {toasts.map(toast => (
          <ToastItem
            key={toast.id}
            id={toast.id}
            content={toast.content}
            onDelete={id => {
              setToasts(toasts.filter(toast => toast.id !== id));
            }}
          />
        ))}
      </div>
    </div>
  );
}

Toasts.propTypes = {};
