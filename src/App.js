import React, { useState , useEffect } from 'react';
import NavBar from './components/NavBar';
import CourseCard from './components/CourseCard';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Login from './Login';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [searchValue, setSearchValue] = useState('business');
  const [userName, setUserName] = useState(''); // Logged-in user
  const [userMail, setUserMail] = useState(''); // Logged-in user
 
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.name) {
      setUserName(storedUser.name);
      setUserMail(storedUser.email);
    }
  }, []);
  return (
    <div className="d-flex flex-column min-vh-100">
    <Router>
      <NavBar onTextChange={setSearchValue} userName={userName} />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<CourseCard type={searchValue} />} />
          <Route path="/news" element={<CourseCard type={searchValue} />} />
          <Route path="/login" element={<Login setUserName={setUserName} setUserMail={setUserMail} />} />
          <Route path="/profile" element={<Profile userName={userName} userMail={userMail} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
