const YourMessage = ( { message }) => {

    //Will check whether the message is an actual text message or an image if its an image this will render the image
    if(message?.attachments?.length > 0) {
        return (
            <img
                src= {message.attachments[0].file}
                alt='attachment'
                className='message-image'
                style={{ float: 'right'  }}
            />
        )
    }

    //Will render the message if its a message
    return (
        <div className='message' style={{ float: 'right', marginRight: '30px', color: 'white', backgroundColor: '#b4e5af'}}>
            {message.text}
        </div>
    );
}

export default YourMessage;