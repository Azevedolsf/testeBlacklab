import React from 'react';
import Header from './Components/Header';
import './App.css';
import Banner from './Components/Banner';
import Produtos from './Components/Produtos';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Produtos />
    </div>
  );
}

export default App;
