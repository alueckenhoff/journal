// Randomizer layout from: https://medium.com/nerd-for-tech/may-14-random-css-animations-using-styled-components-in-react-dda83d9afb62
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Calendar from './Pages/Calendar';

function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/calendar' component={Calendar} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
