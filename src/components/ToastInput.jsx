import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useStyles = () => ({
  '>input': {
    height: 32,
    padding: 0
  },
  '>button': {
    height: 36,
    marginLeft: 4
  }
});

export default function ToastInput({ onAdd }) {
  const [value, setValue] = useState('');
  const formStyle = useStyles();
  return (
    <form css={formStyle}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (value === '') return;
          onAdd(value);
        }}
      >
        Show toast
      </button>
    </form>
  );
}

ToastInput.propTypes = {
  onAdd: PropTypes.func
};
