import React from 'react';

import '../assets/css/Home.css'

import Header from './Header'
import Body from './Body';

function Home() {
  return (
    <>
    <div className="container_home">
      <div>
        <Header/>
      </div>
      
      <div className='body_home'>
        <Body/>
      </div>

    </div>
    </>
  );
}

export default Home;
