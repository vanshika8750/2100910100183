import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Results from './Pages/Results';
import ProductDetail from './Pages/ProductDetail'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/product-detail" element={<ProductDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;
