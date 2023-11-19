import React from 'react'
import {useState} from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    });

    const [displayerror, setError] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user/login', loginData);
            const { message } = response.data;
            if (response.status === 200) {
                alert(message);
                navigate('/layout');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    // Bad Request (validation errors)
                    if (error.response.data.errors && error.response.data.errors.length > 0) {
                        setError(error.response.data.errors.join(', '));
                    } else {
                        setError('Validation error');
                    }
                } else if (error.response.status === 404) {
                    // Not Found (invalid username or password)
                    setError(error.response.data.message);
                } else {
                    // Other server errors
                    setError('Internal server error');
                }
            } else {
                // Network error
                setError('Network error');
            }
        }
        setLoginData({
            email: '',
            password: ''
        });
    };
    

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#343a40',
                color: 'white',
                padding: '20px'
            }}
        >
            <div className="container">
                <h1>LoginPage</h1>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        className="form-control mb-3"
                        style={{ borderColor: '#f00 #0f0 #00f #ff0' }} // Multicolored outline effect
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        className="form-control mb-3"
                        style={{ borderColor: '#f00 #0f0 #00f #ff0' }} // Multicolored outline effect
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ borderColor: '#f00 #0f0 #00f #ff0' }} // Multicolored outline effect
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

