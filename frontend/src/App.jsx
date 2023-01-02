import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Navbar from './components/navabar/Navbar';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import GameDetails from './pages/gameDetails/GameDetails';
import Footer from './components/footer/Footer';
import DrawerNavbar from './components/drawerNavbar/DrawerNavbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <DrawerNavbar />
      <div className='App__content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/game/:id' element={<GameDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
