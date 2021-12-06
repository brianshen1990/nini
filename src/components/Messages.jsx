import React, {useState} from 'react';
import MessageInput from './MessageInput';
import MessageItem from './MessageItem';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Global, css } from '@emotion/react'

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
    setMessages([...messages, { content, id: uuidv4()}]);
  }
  return (
    <>
      <MessageInput onAdd={addMessage} />
      <Global
        styles={css`
          .my-node-enter {
            opacity: 0;
          }
          .my-node-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .my-node-exit {
            opacity: 1;
          }
          .my-node-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
        `}
      />
      <ul css={styles}>
        <TransitionGroup className="my-node">
          {
            messages.map( message => 
              <CSSTransition
                key={message.id}
                timeout={500}
                classNames="my-node"
              >
                <MessageItem 
                  content={message.content} 
                  id={message.id} 
                  key={message.id} 
                  onDelete={deleteMessage} />
              </CSSTransition> )
          }
        </TransitionGroup>
      </ul>
    </>
  )
}
  