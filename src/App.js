import React from 'react';
import NavBar from './components/layout/navbar/index'
import CarouselA from './components/carousell/index'
import Cards from './components/cards/index'
import Info from './components/info/index'
import Articles from './components/articles/index'
import Footer from './components/layout/footer/index'

function App() {
  return (
    <>
      <NavBar />
      <CarouselA />
      <Cards />
      <Info />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
