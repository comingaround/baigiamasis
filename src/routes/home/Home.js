import React from 'react'
import Nav from '../../components/navigation/Nav';
import Hero from '../../components/hero/Hero';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Cards />
      <Footer />
    </>
  )
}

export default Home