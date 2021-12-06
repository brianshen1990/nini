import { boolean, text, select } from '@storybook/addon-knobs';
import MessageItem from '../components/MessageItem';

export const MessageItemExample = () => {

    return <MessageItem content={text("content",'message contnet')} onDelete={()=>alert("you clicked delete button")} />;
  };
  
  export default {
    title: 'Sample / MessageItem'
  };
  
  