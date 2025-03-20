import './App.css'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import axios from "axios";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const initClient = () => {
            gapi.load('client:auth2', () => {
                gapi.client.init({
                    clientId: import.meta.env.VITE_CLIENT_ID,
                    scope: "https://www.googleapis.com/auth/userinfo.profile",
                }).then(() => {
                    console.log("Google API Client initialized successfully.");
                }).catch((error: Error) => {
                    console.error("Error initializing Google API Client:", error);
                });
            });
        };

        console.log("Client ID:", import.meta.env.VITE_CLIENT_ID);
        initClient();
    }, []);

    const onSuccess = async (response: any) => {
        console.log("로그인 성공:", response);

        const authToken = response.credential;
        try {
            const res = await axios.post('http://localhost:3000/api/auth/login', {
                token: authToken,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (res.status === 200) {
                navigate('/main');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onFailure = (response: any) => {
        console.log("로그인 실패:", response);
    };

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
            <h1>dddd</h1>
            <GoogleLogin
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </GoogleOAuthProvider>
    )
}

export default App;