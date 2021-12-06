import React, {useState} from 'react';
import PropTypes from 'prop-types';

const useStyles = () => {
  return {
    '>button': {
      marginLeft: 16
    }
  }
}

export default function MessageInput({ onAdd }) {
const styles = useStyles();
  const [content, setContent] = useState("");

  return (
    <form css={styles} onSubmit={(e) => {
        e.preventDefault();
        onAdd(content);
        setContent("");
      }}>
      <input type='text' value={content} onChange={(e)=>setContent(e.target.value)} />
      <button type='submit'>Add to list</button>
    </form>
  )
}

MessageInput.propTypes = {
  onAdd: PropTypes.func
}
  
  