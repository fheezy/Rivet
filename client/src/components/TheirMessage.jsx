const TheirMessage = ( {previousMessage, message }) => {

    //checks whether this is the first message sent by the user
    const firstMessageUser = !previousMessage || previousMessage.sender.username !== message.sender.username;
    return (
        <div className='messageRow'>
            {firstMessageUser && (
                <div
                    className="messageAvatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {
                //Will check whether the message is an actual text message or an image if its an image this will render the image
                (message?.attachments?.length > 0) 
                ?(
                    <img
                    src= {message.attachments[0].file}
                    alt='attachment'
                    className='messageImage'
                    style={{ marginLeft: firstMessageUser ? '6px' : '50px'  }}
                    />
                ) : (
                    <div className='message' style={{ float: 'left', backgroundColor: '#896f95', marginLeft: firstMessageUser ? '6px' : '50px'}}>
                        {message.text}
                    </div>
                )
            }
        </div>
    );
}

export default TheirMessage;