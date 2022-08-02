import { ChatEngine } from 'react-chat-engine';
import './App.css';
import Login from './components/Login';
import ConversationFeed from './components/ConversationFeed';

const App = () => {

  //Placeholder for now. Represents that if you are not logged in it will take you to the login form
  if(!localStorage.getItem('username')) return <Login />

  return (
    < ChatEngine 
      //requirements found on chatengine dashboard that is needed to chat. This will be the admin info
        height= '80vh'
        projectID= 'd47c3f79-12c9-4f2b-b91d-3dd5fe91ba59'
        userName= {localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}

        //prop
        renderChatFeed= {(applicationProps) => <ConversationFeed {...applicationProps } /> } 
      />
  )
}

export default App;