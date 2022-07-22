import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavbarTop from './components/navbarTop/NavbarTop';
import Login from './components/navbarTop/Login';
import Signup from './components/navbarTop/SignUp';
import StarshipList from './components/navbar/StarshipList';
import Starship from './components/Starship';
import Home from './components/navbar/Home';
import reportWebVitals from './reportWebVitals';
import  './components/starship.css';
import  './components/navbar/starshipList.css';
import './components/styles.css';
import './components/navbarTop/navbarTop.css'
import './components/navbar/navbar.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='starships' element={<StarshipList />} />
        {/* Exercise 7
        <Route path='starships' element={localStorage.getItem('user') ? <StarshipList /> : <Login />} /> */}
        <Route path='starship/:starshipId' element={<Starship />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
