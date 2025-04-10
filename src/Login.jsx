import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({setUserName,setUserMail}) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  
  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      const data = await res.json();
      console.log('Response Data:', data);
  
      if (res.ok && data.user && data.user.name) {
        alert(data.message);
        setUserName(data.user.name);
        setUserMail(data.user.email);
        navigate('/news');
        localStorage.setItem('user', JSON.stringify(data.user)); // Save user in localStorage
        
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed: ' + err.message);
    }
  };
  
  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        setIsSignIn(true); // switch to login
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <div className="auth-container d-flex align-items-center justify-content-center text-white">
      <div className="auth-card p-4 shadow-lg">
        <h2 className="text-center mb-4">📰 Headlines Hub°</h2>

        {isSignIn ? (
          <>
            <h4 className="text-center mb-3">Sign In</h4>
            <form onSubmit={login}>
              <input type="email" className="form-control mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              <button type="submit" className="btn btn-light w-100">Sign In</button>
            </form>
            <p className="mt-3 text-center">
              New here? <span onClick={toggleForm} className="toggle-link">Create an account</span>
            </p>
          </>
        ) : (
          <>
            <h4 className="text-center mb-3">Register</h4>
            <form onSubmit={register}>
              <input type="text" className="form-control mb-3" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
              <input type="email" className="form-control mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              <button type="submit" className="btn btn-light w-100">Register</button>
            </form>
            <p className="mt-3 text-center">
              Already have an account? <span onClick={toggleForm} className="toggle-link">Sign In</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default Login;
