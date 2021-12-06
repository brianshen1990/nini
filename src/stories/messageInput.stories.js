import MessageInput from '../components/MessageInput';

export const MessageInputExample = () => {

    return <MessageInput onAdd={()=>alert("you clicked add button, but this is just a preview")} />;
  };
  
  export default {
    title: 'Sample / MessageInput'
  };
  
  