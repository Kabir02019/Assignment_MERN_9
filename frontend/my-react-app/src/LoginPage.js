
import React from 'react';
import axios from 'axios';
// import axiosProxy from 'axios-https-proxy-fix';
// import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/user/login', loginData);
            const { success, message } = res.data;
            if (success) {
                alert(message);
            } else {
                alert(message);
            }
        } catch (err) {
            console.error('LOGIN ERROR:', err);
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

