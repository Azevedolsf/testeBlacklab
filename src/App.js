import React from 'react';
import Header from './Components/Header';
import './App.css';
import Banner from './Components/Banner';
import Produtos from './Components/Produtos';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Produtos />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
