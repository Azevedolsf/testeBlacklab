import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Banner from './Components/Banner/Banner';
import Produtos from './Components/Produtos/Produtos';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

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
