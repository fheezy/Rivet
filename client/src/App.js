import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ConversationFeed from './components/ConversationFeed';

const App = () => {
  return (
    < ChatEngine 
      //requirements found on chatengine dashboard that is needed to chat. This will be the admin info
        height= '80vh'
        projectID= 'd47c3f79-12c9-4f2b-b91d-3dd5fe91ba59'
        userName= 'admin'
        userSecret='SMUCode2022!'

        //prop
        renderChatFeed= {(applicationProps) => <ConversationFeed {...applicationProps } /> } 
      />
  )
}

export default App;