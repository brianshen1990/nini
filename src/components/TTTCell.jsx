import React from 'react';
import PropTypes from 'prop-types';

const useStyles = () => ({ color: 'pink' });

export default function TTTCell({ value, index, onClick }) {
  const headerStyle = useStyles();
  return (
    <div onClick={() => onClick(index)}>
      {value !== 0 && (value > 0 ? 'X' : 'O')}
    </div>
  );
}

TTTCell.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number,
  index: PropTypes.number
};
