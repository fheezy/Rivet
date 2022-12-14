import React from 'react';
import ChatMessageForm from './ChatMessageForm';
import YourMessage from './YourMessage';
import TheirMessage from './TheirMessage';


const ConversationFeed = (props) => {
    const { chats, activeChat, userName, messages } = props

    const chat = chats && chats[activeChat];

    const displayReadReceipts = (message, isYourMessage) => {
        return chat.people.map((person, index) => person.previous_read === message.id && (
            <div
                key= {`read_${index}`}
                className='readReceipts'
                style={{
                    float: isYourMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    //Functional component used to render new messages
    const displayMessages = () => {
        const keys = Object.keys(messages);

        //Each message is assigned a key which is the id for each message this will return the messages
        return keys.map((key, index) => {
            //This is a single message
            const message = messages[key];

            //This will let us know if there was a previous message sent
            const previousMessageKey = index === 0 ? null : keys[index -1];

            //Checks whether this is our message
            const isYourMessage = userName === message.sender.username;
            

            return (
                <div key= {`msg_${index}`} style = {{width: '100%' }}>
                    <div className ='messageBlock'>
                        {
                            isYourMessage
                            ? <YourMessage message={message} />
                            : <TheirMessage message={message} previousMessage = {messages[previousMessageKey]} />
                        }
                        <div className='readReceipts' style={{ marginRight: isYourMessage ? '20px' : '0px', marginLeft: isYourMessage ? '0px' : '65px'}} ></div>
                        { displayReadReceipts(message, isYourMessage)}
                    </div>
                </div>
            )
        })
    }

    //If there has been no chat in the feed it will return a string
    if(!chat) return 'Please wait'

    return (
        <div className='conversation-feed'>
            <div className='conversation-title-container'>
                <div className='conversation-title'>{chat?.title}</div>
                <div className='conversation-subtitle'>
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {displayMessages()}
            <div stlye={{ height: '100px'}} />

            {/* form where you can send messages */}
            <div className ='messageFormContainer'>
                <ChatMessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
}

export default ConversationFeed;