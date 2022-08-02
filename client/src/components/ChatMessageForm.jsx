//import state
import { useState } from "react";

//Features from react chat engine
import { sendMessage, isTyping } from 'react-chat-engine';

//Importing Icons from ant-desgin/icons
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const ChatMessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const submitHandler = (event) => {
        //prevents browser refresh
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text });

        //Will set the from back to an empty string after sending message
        setValue('');
    }

    const changeHandler = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    }

    const uploadHandler = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    //Form for inputting messages
    return (
        <form className ='messageForm' onSubmit={submitHandler}>
            <input
                className='messageInput'
                placeholder='Type a message!'
                value ={value}
                onChange={changeHandler}
                onSubmit={submitHandler}
            />

            {/* uploading btn for attachments */}
            <label htmlFor="upload-btn">
                <span className="image-btn">
                    <PictureOutlined className="pictureIcon"/>
                </span>
            </label>
            <input
                type='file'
                multiple={false}
                id='upload-btn'
                style={{ display: 'none' }}
                onChange={uploadHandler}
            />
            <button type='submit' className='submit-btn'>
                <SendOutlined className="submit-icon" />
            </button>
        </form>
    );
}

export default ChatMessageForm;