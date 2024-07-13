// src/components/Home.js
import React from 'react';
import Header from './header';
import InfoSection from './info';
import LinksSection from './link';
import Footer from './footer';
import './css/home.css'; 

function Home() {
  return (
    <div className="home">
      <Header />
      <InfoSection />
      <LinksSection />
      <Footer />
    </div>
  );
}

export default Home;
