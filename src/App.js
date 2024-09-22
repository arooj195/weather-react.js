// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import SearchCity from './components/SearchCity';
import Weather from './components/Weather';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [city, setCity] = useState(''); // Default to an empty city

  return (
    <div className="App">
      <Header />
      <SearchCity onSearch={setCity} />
      <Weather city={city} />
      <Footer/>
    </div>
  );
}

export default App;
