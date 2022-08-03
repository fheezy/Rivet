import { useState } from "react"
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const LoginScreenForm = () => {
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': 'd47c3f79-12c9-4f2b-b91d-3dd5fe91ba59', 'User-Name': username, 'User-Secret': pw }

        try {
            //checking the api server to see whether usernames were found.
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            //if entered a valid user it will save to localstorage. Placeholder for now.
            localStorage.setItem('username', username);
            localStorage.setItem('password', pw);

            window.location.reload();

        } catch (error) {
            //catch error for invalid credentials
            setError('You have entered incorrect credentials. Please try again')
        }
    }

    return (
        <div className="wrapper container">
            <div className="loginForm innerContainer">
                <h1 className="title">Welcome Back</h1>
                <form onSubmit={submitHandler} >
                    <input type='text' value= {username} onChange={(event) => setUsername(event.target.value)} className='inputUser' placeholder="Username" required /> 
                    <input type='text' value= {pw} onChange={(event) => setPw(event.target.value)} className='inputPw' placeholder="Password" required /> 
                    <div align='center'>
                        <button type='submit' className="btn">
                            <span> Rivet</span>
                        </button>
                    </div>
                    <h2 className="error"> {error} </h2>
                </form>
            </div>
        </div>
    )
}

export default LoginScreenForm;