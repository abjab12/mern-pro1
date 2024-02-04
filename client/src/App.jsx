import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/Signin';
import About from './pages/about';
import SignUp from './pages/signUp';
import Profile from './pages/profile'; // Assuming you have a Profile component
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
