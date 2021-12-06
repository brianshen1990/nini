import React, {useState} from 'react';
import MessageInput from './MessageInput';
import MessageItem from './MessageItem';
import { v4 as uuidv4 } from 'uuid';

const useStyles = () => {
  return {
    padding: 0, 
    maxWidth: 360
  }
}

export default function Messages({}) {
  const styles = useStyles();
  const [ messages, setMessages] = useState([]);

  const deleteMessage = (id) => {
    const index = messages.map(message=> message.id).indexOf(id);
    if ( index >= 0 ) {
      setMessages( [...messages.slice(0, index), ...messages.slice(index+1)] );
    }
  }
  const addMessage = (content) => {
    console.log("click added");
    setMessages([...messages, { content, id: uuidv4() }]);
  }
  return (
    <>
      <MessageInput onAdd={addMessage} />
      <ul css={styles}>
        {
          messages.map( message => <MessageItem 
            content={message.content} 
            id={message.id} 
            key={message.id} 
            onDelete={deleteMessage} /> )
        }
      </ul>
    </>
  )
}
  