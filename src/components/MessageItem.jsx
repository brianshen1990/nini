import React, {useState} from 'react';
import PropTypes from 'prop-types';

const useStyles = () => {
  return {
    listStyleType: 'none',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '> button': {
      marginLeft: 16
    }
  }
}

export default function MessageItem({ id, content="default", onDelete }) {
  const messageItemStyle = useStyles();

  return (
    <>
      
    
        <li css={messageItemStyle}>
          <span>{content}</span> 
          <button onClick={ () => {
            onDelete(id);
          }} aria-label="delete">X</button>
        </li>
  
    </>
    
  )
}

MessageItem.propTypes = {
  content: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.string.isRequired,
}
  