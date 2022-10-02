import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import HomeScreen from './svgs/HomeScreen'
import StockScreen from './svgs/StockScreen'
import StockScreenAPL from "./svgs/StockScreenAPL";
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="stock" element={<StockScreen />} />
          <Route path="stockapl" element={<StockScreenAPL />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;