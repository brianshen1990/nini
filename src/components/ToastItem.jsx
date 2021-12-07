import React from 'react';
import PropTypes from 'prop-types';

const useStyles = () => ({
  height: 36,
  padding: 8,
  width: 'fit-content',
  borderRadius: 4,
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  margin: 'auto',
  marginTop: 8,
  justifyContent: 'center',
  alignItems: 'center',
  '> span': {
    lineHeight: '100%'
  },
  '>button': {
    color: 'white',
    border: 0,
    backgroundColor: 'transparent',
    width: 24,
    height: 24,
    marginLeft: 8
  }
});

export default function ToastItem({ id, content, onDelete }) {
  const toastItemStyle = useStyles();
  return (
    <div css={toastItemStyle}>
      <span>{content}</span>
      <button type="button" onClick={() => onDelete(id)}>
        <svg viewBox="0 0 20 20">
          <line
            x1="0.75"
            y1="0.75"
            x2="19.25"
            y2="19.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="19.25"
            y1="0.75"
            x2="0.75"
            y2="19.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

ToastItem.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  onDelete: PropTypes.func
};
