import React from 'react';
import '../assets/css/Header.css'

import Nav from '../components/Nav';

function Header() {
  return (
    <>
    
    <div className="container_heider">
      <div className="title_rick">
        <h1 className='title'>Rick and Morty</h1> 
      </div>

      <div className="container_nav">
        <Nav/>
      </div>

    </div>

    </>
  );
}

export default Header;
