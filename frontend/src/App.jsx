import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Navbar from './pages/navabar/Navbar';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import GameDetails from './pages/gameDetails/GameDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <img className='game__banner' src='https://wallpaper.dog/large/20433611.jpg' alt='game banner' />
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/category' element={Category} />
        <Route path='/game:id' element={GameDetails} />
      </Routes>
    </div>
  )
}

export default App
