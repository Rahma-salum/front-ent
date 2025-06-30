import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4500/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log('Logged in user:', user);

        // ✅ Step 1: Fetch full user details using /api/me/{id}
        const userDetailsResponse = await fetch(`http://localhost:4500/api/me/${user.id}`);
        if (userDetailsResponse.ok) {
          const userDetails = await userDetailsResponse.json();
          console.log('User Details:', userDetails);

          // ✅ Step 2: Navigate based on role
          if (userDetails.role === 'ADMIN') {
            navigate('/main/adminDashbord/RegisterPharmacy');
          } else if (userDetails.role === 'CUSTOMER') {
            navigate('/main/map');
          } else {
            setError('Unknown user role.');
          }
        } else {
          setError('Failed to fetch user details.');
        }

      } else if (response.status === 401) {
        setError('Invalid email or password.');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p className="register-link">
            <Link to="/register">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
